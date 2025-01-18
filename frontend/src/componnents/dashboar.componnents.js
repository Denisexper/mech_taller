import React, { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";


function MechList() {
    const [mechs, setMechs] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {

        /* const token = localStorage.getItem('token') */

        fetch("http://localhost:8080/api/get-mechs", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
            .then(res => {
                if (!res.ok) throw new Error(`Http error ${res.status}`);
                return res.json();
            })
            .then(data => {
                console.log(data);
                
                if (Array.isArray(data.mc)) {
                    setMechs(data.mc);
                } else {
                    toast.success("invalid response")
                }
            })
            .catch(err => setError(err.message));
    }, []);


    return (
        
        <div className="container mx-auto px-4 py-8">
            < Toaster />
            <h1 className="text-2xl font-bold mb-4">Mechanics List</h1>
            <button className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">Add Mechanic</button>
            <table className="min-w-full bg-white border">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border">First Name</th>
                        <th className="py-2 px-4 border">Last Name</th>
                        <th className="py-2 px-4 border">Email</th>
                        <th className="py-2 px-4 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {mechs.length > 0 ? (
                        mechs.map((mech) => (
                            <tr key={mech._id}>
                                <td className="py-2 px-4 border">{mech.name}</td>
                                <td className="py-2 px-4 border">{mech.lastName}</td>
                                <td className="py-2 px-4 border">{mech.email}</td>
                                <td className="py-2 px-4 border flex space-x-2">
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded">Update</button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                                    <button className="bg-teal-500 text-white px-3 py-1 rounded">View</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center py-4">No mechanics found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
}

export default MechList;

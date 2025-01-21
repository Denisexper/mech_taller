import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import swal from "sweetalert2";

function CreateMech() {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data: ", formData);

        try {
            const response = await fetch("http://localhost:8080/api/create-mech", {

                

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data)
            if(response.ok) {
                swal.fire({
                    title: "Mechanic Created Successfully",
                    icon: "success",
                    confirmButtonText: "Agree"
                })
                navigate("/");
            } else {
                toast.success("error creando el mecanico")
            }
        } catch (error) {
            console.error("error", error)
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Toaster />
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-center text-2xl font-bold text-gray-700">
                    Crear Mecánico
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Ingresa el nombre"
                            required
                        />
                    </div>
    
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Apellido
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Ingresa el apellido"
                            required
                        />
                    </div>
    
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Ingresa el correo electrónico"
                            required
                        />
                    </div>
    
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Ingresa la contraseña"
                            required
                        />
                    </div>
    
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Crear Mecánico
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
    
}

export default CreateMech;
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditMech() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        const fetchMechData = async () => {
            console.log("Id del mecanico", id);
            try {
                const response = await fetch(`http://localhost:8080/api/get-mech/${id}`);
                const data = await response.json();
                console.log("Informacion mecanico", data);

                if (response.ok) {
                    setFormData({
                        name: data.mc.name || "",
                        lastName: data.mc.lastName || "",
                        email: data.mc.email || "",
                        password: "", // no mostrar la contraseña
                    });
                } else {
                    console.log("Error al obtener datos del mecanico");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchMechData();
    }, [id]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/api/update-mech/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
            navigate("/dashboard");
        } catch (error) {
            console.error("Error", error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-center text-2xl font-bold text-gray-700">
                    Editar Mecánico
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
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Actualizar Mecánico
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditMech;

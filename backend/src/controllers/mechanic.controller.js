import bcrypt from 'bcrypt';
import mechanic from "../models/mecanico.models.js";


class MecanicoController {

    async createMechanic(req, res) {
        try {
            const { name, lastName, email, password } = req.body;

            const haspassword = await bcrypt.hash(password, 10);

            const mc = await mechanic.create({name, lastName, email, password: haspassword});

            res.status(200).send({
                message: "Mecanico creado con exito",
                mc
                
            })
        } catch (error) {
            res.status(500).send({
                message: "Error al crear el mecanico",
                error: error.message
            })
        }

    }

}

export default MecanicoController;
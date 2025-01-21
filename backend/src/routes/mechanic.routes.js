import MecanicoController from "../controllers/mechanic.controller.js";
import express from "express";
import { verifyToken } from "../middleware/auth.js";

const app = express.Router()

//creamos nueva instancia de la clase
const mechanic = new MecanicoController()

app.post("/create-mech", verifyToken, mechanic.createMechanic);
app.get("/get-mechs", mechanic.getMechanics);
app.get("/get-mech/:id", mechanic.getMechanic);
app.put("/update-mech/:id", mechanic.updateMechanic);
app.delete("/delete-mech/:id", mechanic.deleteMechanic);

export default app;
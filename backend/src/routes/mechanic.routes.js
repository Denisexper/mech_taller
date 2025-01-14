import MecanicoController from "../controllers/mechanic.controller.js";
import express from "express";

const app = express.Router()

//creamos nueva instancia de la clase
const mechanic = new MecanicoController()

app.post("/create-mech", mechanic.createMechanic);

export default app;
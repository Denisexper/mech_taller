import express from 'express'
import connect from './src/config/connection.js';
import mechanicRoutes from "./src/routes/mechanic.routes.js"
import cors from 'cors'

const app = express();

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`app liste at port ${PORT}`);
    
})

connect()

app.use('/api', mechanicRoutes)
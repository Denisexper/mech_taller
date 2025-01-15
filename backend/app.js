import express from 'express'
import connect from './src/config/connection.js';
import mechanicRoutes from "./src/routes/mechanic.routes.js"

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`app liste at port ${PORT}`);
    
})

connect()

app.use('/api', mechanicRoutes)
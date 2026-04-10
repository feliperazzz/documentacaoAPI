// const express = require("express") commonJS
import express from "express"; //module
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";
import usuarioRoute from "./routes/usuarios.route.js"

const app = express();
const PORT = 3000;

app.use(express.json());

/**
 * @swagger
 * /:
 *  get:
 *      summary: Rota inicial da API
 *      tags: [Inicial]
 *      responses:
 *          200: 
 *              description: API funcionando 
 */

app.get("/", (req,res) =>{
    res.status(200).json({
        msg:"API funcionando"
    });
});

app.use("/usuarios", usuarioRoute);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`),
     console.log(`http://localhost:${PORT}/api-docs`);
})
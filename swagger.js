// importa a biblioteca do swagger-jsdoc
// Ela serve para ler os comentarios do tipo @swagger no seu codigo
import swaggerJSDoc from "swagger-jsdoc";

//criar o objeto que guardará as informações principais da API
const options = {
// "Defition" é onde definimos as informações principais da API 
    definition : {
        
        openapi: "3.0.0",

        info:{
            title: "API em node.js com Express",

            version: "1.0.0",

            description: "Documentação da API com swagger"
        },

        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    //APIS definem em quais arquivos o swagger deve procurar 
    // Os comentários com @swagger
    apis: ["./server.js", "./routes/usuarios.route.js"]
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec
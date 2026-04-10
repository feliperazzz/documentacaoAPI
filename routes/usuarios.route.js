import express from "express";

const router = express.Router();

let ALUNOSDS2A = [
        {id: 1, nome: "Gabriel", email: "gabriel@gmail.com"},
        {id: 2, nome: "Murilo", email: "murilol@gmail.com"},
        {id: 3, nome: "Isac", email: "isac@gmail.com"}
];

/**
 * @swagger
 * /usuarios:
 *  get:
 *      summary: Listar Usuarios
 *      tags: [Usuários]
 *      responses:
 *          200: 
 *              description: Listar usuarios retornada com sucesso
 */

router.get("/", (req,res) =>{
    res.status(200).json(ALUNOSDS2A);
});


/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cadastrar um novo usuario
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Gentileza anexar nome e email
 */


router.post("/", (req,res)=> {
    // console.log(req.body)
    const {nome, email} = req.body;

    if(!nome && !email){
        return res.status(400).json({
            msg: "Gentileza anexar nome e email"
        })
     }

     const novoAluno = {
        id : ALUNOSDS2A.length + 1,
        nome,
        email
    };
    ALUNOSDS2A.push(novoAluno);

    res.status(201).json({
        msg: "Usúario cadastrado com sucesso"
    })

})

export default router;
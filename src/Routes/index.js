const router = require("express").Router()
const rpa = require("../rpa")

router.get("/:produto",async(req,res) => {

   try{
        const produto = req.params.produto
        console.log("recebi a requisição "+produto)
        const retorno = await rpa(produto)
        console.log("fim") 
        res.status(200).send({mensagem:retorno })
    }catch(erro){
        console.log(erro)
        res.status(400).send({error:erro })
    }
})


module.exports = router
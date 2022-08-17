const puppeteer = require("puppeteer")
const express = require("express")
const cours = require("./Routes/cours")
const routes = require("./Routes")

const api = express()

api.use(express.json())
api.use(cours)
api.use(routes)

api.listen(8000,() => {

   console.log("api está rodando na porta 8000") 
})

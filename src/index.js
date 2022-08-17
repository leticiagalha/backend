const puppeteer = require("puppeteer")
const express = require("express")
const cours = require("./Routes/cours")
const routes = require("./Routes")

require('dotenv/config');

const api = express()

api.use(express.json())
api.use(cours)
api.use(routes)

api.listen(process.env.PORT ||8000,() => {

   console.log("api está rodando na porta "+process.env.PORT) 
})

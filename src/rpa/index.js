const puppeteer = require("puppeteer");
const americanas = require("./Americanas");
const submarino = require("./Submarino");

async function start (Pesquisa) {
    console.log(Pesquisa)
    const browser = await puppeteer.launch({headless:true});

    const listaAmericanas = await americanas(browser, Pesquisa)
    const listaSubmarino = await submarino(browser, Pesquisa)

    browser.close()
    return {americanas:listaAmericanas, submarino:listaSubmarino}
  }

module.exports = start


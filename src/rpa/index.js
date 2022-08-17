const puppeteer = require("puppeteer");
const americanas = require("./Americanas");
const submarino = require("./Submarino");

async function start (Pesquisa) {
    console.log(Pesquisa)
    const browser = await puppeteer.launch({
      'args' : [
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    console.log("a1")
    const listaAmericanas = await americanas(browser, Pesquisa)
    console.log("a2")
    const listaSubmarino = await submarino(browser, Pesquisa)
    console.log("a3")

    browser.close()
    return {americanas:listaAmericanas, submarino:listaSubmarino}
  }

module.exports = start


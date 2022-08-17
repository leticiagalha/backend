async function submarino(browser, Pesquisa){

   console.log("submarino1")

    const page = await browser.newPage()
    console.log("submarino2")

    await page.goto("https://www.submarino.com.br/busca/" + Pesquisa)
    console.log("submarino3")


    const lista = await page.evaluate(()=>{

  
       const listaNomes = document.querySelectorAll('.product-name__Name-sc-13u5qjg-0.euRmnG')
       const listaPrecos = document.querySelectorAll('.src__Text-sc-154pg0p-0.price__PromotionalPrice-sc-1icb1x-1.bVIOxQ.price-info__ListPriceWithMargin-sc-yrgy2m-2.iDmjOT')
       const listaLinks = document.querySelectorAll('.inStockCard__Wrapper-sc-4ayj0x-0.hfcojY > a')
        

       const objetos = []
       for (var i=0; i<listaNomes.length; i++){
          try { 
            objetos.push({Nome: listaNomes[i].innerText,Preco: listaPrecos[i].innerText,Link: listaLinks[i].href })
          } catch(err){}
      
       }

       return objetos

    })
    console.log("submarino4")
    return lista

}

module.exports = submarino
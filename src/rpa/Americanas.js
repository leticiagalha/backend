async function americanas(browser, Pesquisa){


    const page = await browser.newPage()
    await page.goto("https://www.americanas.com.br/busca/" + Pesquisa)


    const lista = await page.evaluate(()=>{

  
       const listaNomes = document.querySelectorAll('.product-name__Name-sc-1shovj0-0.gUjFDF')
       const listaPrecos = document.querySelectorAll('.src__Text-sc-154pg0p-0.price__PromotionalPrice-sc-h6xgft-1.ctBJlj.price-info__ListPriceWithMargin-sc-1xm1xzb-2.liXDNM')
       const listaLinks = document.querySelectorAll('.inStockCard__Wrapper-sc-1ngt5zo-0.iRvjrG > a')
        

       const objetos = []
       for (var i=0; i<listaNomes.length; i++){
          try { 
            objetos.push({Nome: listaNomes[i].innerText,Preco: listaPrecos[i].innerText,Link: listaLinks[i].href })
          } catch(err){}
      
       }

       return objetos

    })
    
    return lista

}

module.exports = americanas
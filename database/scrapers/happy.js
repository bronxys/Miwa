const axios = require('axios')
const cheerio = require('cheerio')

const nunuhappyScraper = (q) => {
    return new Promise((resolve, reject) => {
        const nunuhappyurl = `https://happymod.com/search.html?q=${q}`    
        axios(nunuhappyurl)
          .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const nunuhappynoticias = []    
            $('.pdt-app-h3').each((index, element) => {
                const nunuhappytitulo = $(element).text().trim()
                const nunuhappyurlapp = 'https://happymod.com/' + $(element).find('a').attr('href')
                const nunuhappyimagem = $(element).find('img').attr('src')
                const nunuhappytitu = $(element).next().find('.pdt-list-num').text().trim() 
                nunuhappynoticias.push({ nunuhappytitulo, nunuhappyurlapp, nunuhappyimagem, nunuhappytitu })
            })
            
            resolve(nunuhappynoticias)
          })
          .catch(error => {
            console.error(`❌ Erro: ${error}`)
            reject('Erro ao buscar os aplicativos.')
          })
    })
}

module.exports = nunuhappyScraper
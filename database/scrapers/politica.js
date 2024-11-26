const axios = require('axios')
const cheerio = require('cheerio')

module.exports = async function politica() {
  try {
    const { data } = await axios.get('https://www.cnnbrasil.com.br/politica/')
    const $ = cheerio.load(data)
    let golfo = []

    $('.home__list__item').each((index, element) => {
      const titulo = $(element).find('.news-item-header__title').text().trim()
      const link = $(element).find('a').attr('href')
      if (titulo && link) {
        golfo.push({
          titulo,
          link: `${link}`
        })
      }
    })

    return golfo
  } catch (error) {
    console.error('Erro no scraper:', error)
    throw error
  }
}
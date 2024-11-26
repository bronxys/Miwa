// searchputa.js
const axios = require("axios");
const cheerio = require("cheerio");

const searchputa = cidade => {
  if (cidade == "sao-paulo") cidade = "sao-paulo-sp"
  else if (cidade == "rio-de-janeiro") cidade = "rio-de-janeiro"
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `https://garotacomlocal.com/acompanhantes/${cidade}`,
      headers: {
        Cookie: "_ga=GA1.2.260162782.1651929834; _gid=GA1.2.1507997333.1651929834"
      }
    }).then(resp => {
      const $0 = cheerio.load(resp.data);
      let url = $0("a.job_listing-clickbox").eq(0).attr("href");
     
      axios({
        method: "GET",
        url: url,
        headers: {
          Cookie: "_ga=GA1.2.260162782.1651929834; _gid=GA1.2.1507997333.1651929834"
        }
      }).then(resp => {
        const $ = cheerio.load(resp.data);
      
        let nome = $("h1.job_listing-title").text();
        let endereco = $(".job_listing-location").eq(0).text();
        let numero = $(".whatsapp-phone").text();
        let whatsapp = $("#gcl_campos_widget-2 > a").attr("href");
        let mapa = $(".job_listing-directions > a").attr("href");
        let descricao = $("#listify_widget_panel_listing_content-2 > p").text();
        let tags = $("#text-44 > div").text();
        let videos = [];
        $(".js-player").each((i, e) => {
          videos.push($(e).attr("src"));
        });
        let imagens = [];
        $("#jmfe-custom-gallery_images").each((i, e) => {
          imagens.push($(e).attr("src"));
        });
           
        const data = {nome, endereco, numero, whatsapp, mapa, descricao, tags, videos, imagens};
        resolve(data);
      }).catch(reject);
    }).catch(reject);
  });
}

module.exports = { searchputa };
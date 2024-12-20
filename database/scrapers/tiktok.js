const axios = require("axios")
const qs = require("qs") // Importando a biblioteca qs para serializar os dados corretamente

async function tikmate(url) {
    return new Promise((resolve, reject) => {
        axios.post('https://api.tikmate.app/api/lookup', qs.stringify({ url }), {
            headers: {
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.9',
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                origin: 'https://tikmate.app',
                referer: 'https://tikmate.app/',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
            }
        })
        .then(response => {
            const data = response.data
            try {
                const res = {
                    author: {
                        username: `@${data.author_id}`,
                        nickname: data.author_name,
                        foto_de_perfil: data.author_avatar
                    },
                    video: {
                        noWatermark: `https://tikmate.app/download/${data.token}/${data.id}.mp4`,
                        noWatermark_HD: `https://tikmate.app/download/${data.token}/${data.id}.mp4?hd=1`
                    }
                }
                resolve(res)
            } catch (e) {
                resolve({ message: "Erro ao executar o scraper! Por favor, entre em contato com o administrador.", status: false })
            }
        })
        .catch(error => reject(error))
    })
}

function tiklydown(url) {
    return new Promise((resolve, reject) => {
        if (!url) return reject(new Error("a entrada do URL é obrigatória."))
        axios.get("https://api.tiklydown.link/api/download", { params: { url } })
            .then(b => resolve(b.data))
            .catch(reject)
    })
}

module.exports = { tikmate, tiklydown }
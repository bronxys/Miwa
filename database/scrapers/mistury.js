const neo = require('scrape-websitee');
const dylux = require('api-dylux');

async function downloadInstaStory(url) {
    try {
        const igStory = await neo.downloader.igStory(url);
        const resultados = [];
        igStory.media.forEach(urlArray => {
            if (urlArray.includes('.jpg') || urlArray.includes('.jpeg') || urlArray.includes('.png')) {
                resultados.push({
                    type: "imagem", 
                    link: urlArray
                });
            } else if (urlArray.includes('.mp4') || urlArray.includes('.mov') || urlArray.includes('.avi')) {
                resultados.push({
                    type: "video", 
                    link: urlArray
                });
            }
        });
        return resultados; // Vai retornar o resultado todo estruturado com o tipo de mídia detectada, atráves de palavras incluídas ao URL, ou seja, uma array igual as outras apis.
    } catch(e) {
        return {
            error: String(e)
        } // Vai retornar o erro ocorrido na hora de consultar a scrapper ou pode ser um erro dentro desta function.
    }
};

async function YoutubeAudioDL_v1(url) {
    try {
        const dataResultYouTube = await dylux.ytmp3(url);
        return dataResultYouTube;
    } catch(e) {
        return 'Ocorreu um erro ao executar a scrapper';
    }
}

async function YoutubeVideoDL_v1(url) {
    try {
        const dataResultYouTube = await dylux.ytmp4(url);
        return dataResultYouTube;
    } catch(e) {
        return 'Ocorreu um erro ao executar a scrapper';
    }
}

async function downloadThreadsMedia(url) {
    try {
        const threadsDL = await neo.downloader.threads(url);
        const resultados = [];
        threadsDL.image_urls.forEach(urlArray => {
            resultados.push({
                type: "imagem",
                link: urlArray
            });
        });
        threadsDL.video_urls.forEach(urlArray => {
            resultados.push({
                type: "video",
                link: urlArray.download_url
            });
        });
        return { 
            resultado: resultados
        };
    } catch(e) {
        return {
            error: String(e)
        };
    }
};



module.exports = {
    downloadInstaStory,
    downloadThreadsMedia,
    YoutubeAudioDL_v1,
    YoutubeVideoDL_v1
};
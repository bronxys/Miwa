const fs = require('fs-extra');
const {
imageToWebp,
videoToWebp,
writeExifImg,
writeExifVid
} = require('./exif');
const getBuffer = async (url, opcoes) => {
try {
opcoes ? opcoes : {}
const post = await axios({
method: "get",
url,
headers: {
'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 
	'DNT': 1,
	'Upgrade-Insecure-Request': 1
},
...opcoes,
responseType: 'arraybuffer'
})
return post.data
} catch (erro) {
console.log(`Erro identificado: ${erro}`)
}
}

const sendImageAsSticker = async (conn, jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
 let buffer;
 if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options);
} else {
buffer = await imageToWebp(buff);
}

await conn.sendMessage(jid, {sticker: {url: buffer}, ...options}, {quoted})
return buffer;
};



const sendVideoAsSticker = async (conn, jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
 let buffer;
 if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options);
} else {
buffer = await videoToWebp(buff);
}

await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer;
}

module.exports = {
sendVideoAsSticker,
sendImageAsSticker
};
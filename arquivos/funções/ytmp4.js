const ytdl = require('ytdl-core');

async function ytMpMisheru(url) {
    try {
        const info = await ytdl.getInfo(url);
        const format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });
        return { result: format.url };
    } catch (error) {
        console.error('Error in ytMpMisheru:', error);
        throw new Error('Failed to retrieve video information');
    }
}

module.exports = { ytMpMisheru };
const Spotify = require('spotify-finder');
const SpotifyDL = require('spotifydl-core').default;

const searchClient = new Spotify({
  consumer: {
    key: '271f6e790fb943cdb34679a4adcc34cc',
    secret: 'c009525564304209b7d8b705c28fd294',
  },
});

const downloadClient = new SpotifyDL({
  clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
  clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009',
});

async function spotifysch(query) {
  try {
    const data = await searchClient.search({
      q: query,
      type: 'track',
      limit: 1,
    });

    const track = data.tracks.items[0];
    const artists = track.artists.map((artist) => ({
      name: artist.name,
      url: artist.external_urls.spotify,
    }));
    return {
      name: track.name,
      album: track.album.name,
      artist: artists,
      release_date: track.album.release_date,
      popularity: track.popularity,
      track: track.external_urls.spotify,
      thumbnail: track.album.images[0].url,
    };
  } catch (error) {
    console.error("Erro ao buscar informações no Spotify:", error);
    return null;
  }
}

async function spotifysch2(url) {
  try {
    const trackInfo = await downloadClient.getTrack(url);
    const audioBuffer = await downloadClient.downloadTrack(url);
    return {
      link: audioBuffer.toString('base64'),
      metadata: {
        title: trackInfo.name,
        artists: trackInfo.artists.map((artist) => artist.name).join(', '),
      },
    };
  } catch (error) {
    console.error("Erro ao baixar a música do Spotify:", error);
    return null;
  }
}


module.exports = {
  spotifysch,
  spotifysch2,
};
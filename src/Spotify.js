const clientID = 'cc748eb4bfed4f8588f500f7013011e7';
const redirectURI = 'http://localhost:3000/?';
let accessToken;
const baseURI = 'https://api.spotify.com'

export function getAccessToken () {
    if (accessToken) {
        return accessToken;
    }
  
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
        return accessToken;
    } else {
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        window.location = accessUrl;
    }
}

export async function getTrack (term) {
    const accessToken = getAccessToken();
    const response = await fetch(`${baseURI}/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    let data;
    if (response.ok) {
        data = await response.json();
    } 
    if (!data.tracks) {
        return [];
    }
    return data.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
    }));
}

export async function savePlaylist (name, trackURIs) {
    const accessToken = getAccessToken();
    let userID;

    const response = await fetch(`${baseURI}/v1/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => response.json()
    ).then(responseJSON => {
        userID = responseJSON.id
    })
    
    const postResponse = await fetch(`${baseURI}/v1/users/${userID}/playlists`, {
        headers: {Authorization: `Bearer ${accessToken}`},
        method: 'POST',
        body: JSON.stringify({name: name})
    }).then(response => response.json()
    ).then(responseJSON => {
        const playlistId = responseJSON.id;
        return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistId}/tracks`, {
          headers: {Authorization: `Bearer ${accessToken}`},
          method: 'POST',
          body: JSON.stringify({uris: trackURIs})
        });
    })
}


 
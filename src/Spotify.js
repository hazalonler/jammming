const clientID = 'cc748eb4bfed4f8588f500f7013011e7';
const redirectURI = 'https://lively-lokum-45a46d.netlify.app/';
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
    try {
        const response = await fetch(`${baseURI}/v1/search?type=track&q=${term}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
        });
        if (response.ok) {
            const data = await response.json();
            return data.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        } else {
            return [];
        }
    } catch (error) {
        alert(`Request to Spotify API was failed ${error}`);
    }
}

export function savePlaylist (name, trackURIs) {
    const accessToken = getAccessToken();
    let userID;

    try {
        fetch(`${baseURI}/v1/me`, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }).then(response => response.json()
          ).then(responseJSON => {
              userID = responseJSON.id
          })
    } catch (err) {
        alert('Failed to get userID');
    }

    try {
        fetch(`${baseURI}/v1/users/${userID}/playlists`, {
            headers: {Authorization: `Bearer ${accessToken}`},
            method: 'POST',
            body: JSON.stringify({name: name})
        }).then(response => response.json()
        ).then(responseJSON => {
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${responseJSON.id}/tracks`, {
              headers: {Authorization: `Bearer ${accessToken}`},
              method: 'POST',
              body: JSON.stringify({uris: trackURIs})
            });
        })
    } catch (err) {
        alert('Failed to get saved');
    }
}


 
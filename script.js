
function updateSongInfo() {
    fetch('https://dash.beupgraded.co.in/api/nowplaying')
    .then(response => response.json())
    .then(data => {
        const songData = data[0].now_playing.song;
        document.getElementById('album-art-img').src = songData.art;
        document.getElementById('song-title').innerText = songData.title;
        document.getElementById('album-name').innerText = songData.album;
        document.getElementById('artist-name').innerText = songData.artist;
    });
}

setInterval(updateSongInfo, 5000); // Update every 5 seconds

function updateVolume(value) {
    document.getElementById('radio-player').volume = value / 100;
    document.getElementById('volume-percentage').innerText = value + '%';
}

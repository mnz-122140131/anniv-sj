document.addEventListener('DOMContentLoaded', function() {
    createRain();
});

let videoElement = document.getElementById('anniversaryVideo');

function playVideo() {
    videoElement.play();
    document.getElementById('videoOverlay').style.display = 'flex';
}

function hideVideo() {
    videoElement.pause();
    document.getElementById('videoOverlay').style.display = 'none';
    videoElement.currentTime = 0;
}

function createRain() {
    const rainContainer = document.createElement('div');
    rainContainer.classList.add('rain');

    for (let i = 0; i < 100; i++) {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * window.innerWidth}px`;
        raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
        rainContainer.appendChild(raindrop);
    }

    document.body.appendChild(rainContainer);
}

// Tambahkan fungsi untuk menampilkan dan menyembunyikan foto
function showPhoto() {
    document.getElementById('photoOverlay').style.display = 'flex';
}

function hidePhoto() {
    document.getElementById('photoOverlay').style.display = 'none';
}

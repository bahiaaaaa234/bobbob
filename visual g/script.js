var player;
var iframe;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'https://www.youtube.com/watch?v=LcC-jBJRzXg', // Substitua pelo ID do vídeo desejado
        playerVars: {
            autoplay: 0,
            rel: 0,
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });
}

function onPlayerReady(event) {
    document.getElementById('youtubeButton').addEventListener('click', function() {
        iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/LcC-jBJRzXg');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('frameborder', '0');
        iframe.style.width = '640px';
        iframe.style.height = '360px';
        document.getElementById('player').innerHTML = '';
        document.getElementById('player').appendChild(iframe);
    });

    document.getElementById('closeButton').addEventListener('click', function() {
        if (iframe) {
            iframe.parentNode.removeChild(iframe);
            iframe = null;
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        if (iframe) {
            iframe.parentNode.removeChild(iframe);
            iframe = null;
        }
    }
}

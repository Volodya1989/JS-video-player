function togglePlay(){
    const method = video.paused ? 'play': 'pause';
    video[method]();
}
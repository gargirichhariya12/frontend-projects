const video = document.getElementById('video');

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(startVideo);

function startVideo() {
    navigator.mediaDevices.getUserMedia({ video: {} })
    .then(stream => video.srcObject = stream)
    .catch(err => console.error('Camera error:', err));
}

async function detectMood() {
  const detections = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();
  if (detections && detections.expressions) {
    const mood = getDominantMood(detections.expressions);
    document.getElementById('result').innerText = `You seem to be: ${mood}`;
    fetchMovies(mood);
  } else {
    document.getElementById('result').innerText = "Couldn't detect mood 😢";
  }
}

function getDominantMood(expressions) {
  return Object.entries(expressions).sort((a, b) => b[1] - a[1])[0][0];
}

function fetchMovies(mood) {
  fetch('movies.json')
    .then(res => res.json())
    .then(data => {
      const list = data[mood] || [];
      const html = list.map(movie => `<div>${movie.title} ⭐ ${movie.rating}</div>`).join('');
      document.getElementById('recommendations').innerHTML = html || 'No recommendations available.';
    });
}

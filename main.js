
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.font = '30px Arial';
ctx.fillText('FNF Demo - Press Arrow Keys', 80, 200);

document.addEventListener('keydown', (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText('You pressed: ' + e.key, 150, 200);
});

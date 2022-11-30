const p1 = {
  score: 0,
  display: document.querySelector('#fpoint'),
  button: document.querySelector('#p1')
}

const p2 = {
  score: 0,
  display: document.querySelector('#spoint'),
  button: document.querySelector('#p2')
}

function scoreUpdate(player, ...opponents) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success')
      player.button.disabled = true;
      for (let opponent of opponents) {
        opponent.display.classList.add('has-text-danger')
        opponent.button.disabled = true;
      }
    }
    player.display.textContent = player.score;
  }
}
const resetBtn = document.querySelector('#reset')
const playScore = document.querySelector('#playTo')
let winningScore = parseInt(playScore.value);
let isGameOver = false;

p1.button.addEventListener('click', function () {
  scoreUpdate(p1, p2)
})

p2.button.addEventListener('click', function () {
  scoreUpdate(p2, p1)
})

resetBtn.addEventListener('click', reset)

playScore.addEventListener('change', function () {
  winningScore = parseInt(this.value)
  reset();
})

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-danger', 'has-text-success');
    p.button.disabled = false;
  }
  // p1.score = 0;
  // p2.score = 0;
  // p1.display.textContent = 0;
  // p2.display.textContent = 0;
  // p1.display.classList.remove('has-text-danger', 'has-text-success');
  // p2.display.classList.remove('has-text-danger', 'has-text-success');
  // p1.button.disabled = false;
  // p2.button.disabled = false;
}

const p1btn = document.querySelector('#p1');
const p2btn = document.querySelector('#p2');
const resetBtn = document.querySelector('#reset');

const p1Display = document.querySelector('#fpoint');
const p2Display = document.querySelector('#spoint');
const playScore = document.querySelector('#playTo')


let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(playScore.value);
let isGameOver = false;

p1btn.addEventListener('click', function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add('has-text-success')
      p2Display.classList.add('has-text-danger')
      p1btn.disabled = true;
      p2btn.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
})
p2btn.addEventListener('click', function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add('has-text-success')
      p1Display.classList.add('has-text-danger')
      p1btn.disabled = true;
      p2btn.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
})

resetBtn.addEventListener('click', reset)

playScore.addEventListener('change', function () {
  winningScore = parseInt(this.value)
  reset();
})

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('has-text-danger', 'has-text-success');
  p2Display.classList.remove('has-text-danger', 'has-text-success');
  p1btn.disabled = false;
  p2btn.disabled = false;
}
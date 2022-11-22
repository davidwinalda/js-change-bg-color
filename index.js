document.querySelector('body').style.backgroundColor = 'green';

function getRandomColor() {
  const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

  const randomIndex = Math.floor(Math.random() * colors.length);
  document.querySelector('body').style.backgroundColor = colors[randomIndex];
}

let btnOnClick = document.getElementById('change-bg');
btnOnClick.addEventListener('click', (e) => {
  e.preventDefault();
  getRandomColor();
});

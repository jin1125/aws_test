const btn = document.getElementById('btn');
const title = document.getElementById('title');

btn.addEventListener('click', () => {
  title.classList.toggle('title-color');
})
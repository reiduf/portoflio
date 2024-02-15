const burger = document.getElementById('burger')
const navbar = document.getElementById('nav')
const mq = document.getElementById('mq')


burger.addEventListener('click', function() {
  navbar.classList.toggle('hidden');
})

navbar.addEventListener('click', function(evt) {
  navbar.classList.toggle('hidden');
})
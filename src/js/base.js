const burger = document.getElementById('burger')
const navbar = document.getElementById('nav')


burger.addEventListener('click', function() {
  navbar.classList.toggle('hidden');
})

navbar.addEventListener('click', function(evt) {
  navbar.classList.toggle('hidden');
})
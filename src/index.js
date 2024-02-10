const burger = document.getElementById('burger')
const navbar = document.getElementById('nav')

burger.addEventListener('click', function() {
  navbar.classList.toggle('hidden');
})

navbar.addEventListener('click', function(evt) {
  if (evt.target.tagName === 'UL') return;
  evt.target.classList.add('active')
})
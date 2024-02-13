const burger = document.getElementById('burger')
const navbar = document.getElementById('nav')
const liEls = document.querySelectorAll('#nav > li')

burger.addEventListener('click', function() {
  navbar.classList.toggle('hidden');
})

navbar.addEventListener('click', function(evt) {
  if (evt.target.tagName === 'UL') return;
  liEls.forEach(li => li.classList.remove('active'));
  evt.target.classList.add('active')
})
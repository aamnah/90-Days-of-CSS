const NavTrigger = document.querySelector('.Nav-trigger')
const Nav = document.querySelector('.Nav')

NavTrigger.addEventListener('click', function (event) {
  event.preventDefault()
  Nav.classList.toggle('is-visible')
})

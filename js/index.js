import { Router } from './router.js'

const router = new Router()
const links = document.querySelectorAll('a');

router.add("/", "pages/home.html", 'bg1.png')
router.add("/universe", "pages/universe.html", 'bg2.png')
router.add("/exploration", "pages/exploration.html",  'bg3.png')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

links.forEach(link => {
    link.addEventListener('click', (event) => {
       event.preventDefault();
       removeActive();
 
       if (link.querySelector('img')) {
          link.parentElement.nextElementSibling.firstElementChild.classList.add('active');
       }
       else {
          link.classList.add('active');
       }
       router.route(link.getAttribute('href'));
    });
});
 
function removeActive() {
    document.querySelector('a.active').classList.remove('active');
}


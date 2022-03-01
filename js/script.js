import smoothScroll from './modules/smooth-scroll.js';
import scrollAnimate from './modules/scroll-animate.js';
import TabNav from './modules/tabnav.js';
import Accordion from './modules/accordion-active.js';
import Modal from './modules/modal.js';
import tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import menuMobile from './modules/menu-mobile.js';
import initFechAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
// import { accordionActive as accordion} from './modules/accordion-active';
// se quiser modificar o nome.

const accordion = new Accordion('[data-animate="accordion"] dt', { startOpened: true });
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const modal = new Modal('[data-modal="abrir"', '[data-modal="fechar"', '[data-modal="container"');
modal.init();

smoothScroll();
scrollAnimate();
tooltip();
initDropdownMenu();
menuMobile();
initFechAnimais();
initFetchBitcoin();

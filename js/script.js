import smoothScroll from './modules/smooth-scroll.js';
import ScrollAnimate from './modules/scroll-animate.js';
import TabNav from './modules/tabnav.js';
import Accordion from './modules/accordion-active.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import fetchAnimals from './modules/fetch-animals.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import OpeningHours from './modules/opening-hours.js';
// import { accordionActive as accordion} from './modules/accordion-active';
// se quiser modificar o nome.

const accordion = new Accordion('[data-animate="accordion"] dt', { startOpened: true });
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const modal = new Modal('[data-modal="abrir"', '[data-modal="fechar"', '[data-modal="container"');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnimate = new ScrollAnimate('[data-animate="scroll"]');
scrollAnimate.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]', ['touchstart', 'click']);
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]', ['click', 'touchstart']);
menuMobile.init();

const openingHours = new OpeningHours('[data-semana]', 'aberto');
openingHours.init();

fetchAnimals('./animaisapi.json', '.numbers-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

smoothScroll();

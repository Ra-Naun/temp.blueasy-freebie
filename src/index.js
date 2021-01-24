import * as $ from 'jquery';
import './styles/styles.css';
import './styles/style.scss';

const navBar__links = $('.nav-bar__link');
const portfolio__links = $('.portfolio__link');
navBar__links[0].classList.add('active');
portfolio__links[0].classList.add('active');

const selectTab = (e, links) => {
  e.preventDefault();
  [].forEach.call(links, (link) => {
    link.classList.remove('active');
  });
  e.target.classList.add('active');
};

[].forEach.call(navBar__links, (link) => {
  link.addEventListener('click', (e) => selectTab(e, navBar__links));
});

[].forEach.call(portfolio__links, (link) => {
  link.addEventListener('click', (e) => selectTab(e, portfolio__links));
});

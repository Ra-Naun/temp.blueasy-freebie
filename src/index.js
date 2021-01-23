import * as $ from 'jquery';
import './styles/styles.css';
import './styles/style.scss';

const navBar__links = $('.nav-bar__link');
navBar__links[0].classList.add('active');

const selectTab = (e) => {
  [].forEach.call(navBar__links, (link) => {
    link.classList.remove('active');
  });
  e.target.classList.add('active');
};

[].forEach.call(navBar__links, (link) => {
  link.addEventListener('click', selectTab);
});

import * as $ from 'jquery';
import './styles/styles.css';
import './styles/style.scss';
import img1 from './imgs/w1.jpg';
import img2 from './imgs/w2.jpg';
import img3 from './imgs/w3.jpg';
import imgVimeo from './imgs/vimeo.png';

function app() {
  /****************************************************************/
  //add EventListeners on buttons and links
  const navBar__links = $('.nav-bar__link');
  const portfolio__btns = $('.portfolio__btn');
  navBar__links[0].classList.add('active');
  portfolio__btns[0].classList.add('active');

  const selectTab = (e, links) => {
    [].forEach.call(links, (link) => {
      link.classList.remove('active');
    });
    e.target.classList.add('active');
  };

  [].forEach.call(navBar__links, (link) => {
    link.addEventListener('click', (e) => selectTab(e, navBar__links));
  });

  [].forEach.call(portfolio__btns, (link) => {
    link.addEventListener('click', (e) => selectTab(e, portfolio__btns));
  });

  /****************************************************************/
  //add portfolio photos in html
  const ul_portfolio__works = $('.portfolio__works')[0];
  const mock_arr_imgs = [img1, img2, img3, img2, img3, img1, img2, img3];
  const mock_arr_categories = ['panoramas', 'portraits', 'macro', 'journal'];

  const loadImgs = () => {
    let currentCategory;
    portfolio__btns.map((btn) => {
      if (portfolio__btns[btn].classList.contains('active')) currentCategory = portfolio__btns[btn].dataset.filter;
    });

    mock_arr_imgs.forEach((src_img) => {
      const li = document.createElement('li');
      li.classList.add('portfolio__work');

      const category = currentCategory?.toLowerCase() !== 'all' ? currentCategory : mock_arr_categories[Math.floor(Math.random() * 4)];

      li.classList.add(category);
      const img = document.createElement('img');
      img.src = src_img;
      img.alt = 'portfolio work';
      img.classList.add('portfolio__img');
      const div = document.createElement('div');
      div.classList.add('portfolio__cover');
      li.appendChild(div);
      li.appendChild(img);
      ul_portfolio__works.appendChild(li);
    });
  };

  loadImgs(); //initial

  const portfolio__load_more = $('.portfolio__load_more')[0];
  portfolio__load_more.addEventListener('click', () => {
    setTimeout(() => {
      loadImgs();
    }, 800);
  });

  /****************************************************************/
  //sort photos

  let portfolio__works;
  updatePortfolio__works();

  function filter(category, items) {
    [].forEach.call(items, (item) => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === 'all';
      if (isItemFiltered && !isShowAll) {
        item.classList.add('anime');
      } else {
        item.classList.remove('hide');
        item.classList.remove('anime');
      }
    });
  }

  [].forEach.call(portfolio__btns, (button) => {
    button.addEventListener('click', () => {
      const currentCategory = button.dataset.filter;
      updatePortfolio__works();
      filter(currentCategory, portfolio__works);
    });
  });

  function updatePortfolio__works() {
    portfolio__works = $('.portfolio__work');
    [].forEach.call(portfolio__works, (card) => {
      card.ontransitionend = function () {
        if (card.classList.contains('anime')) {
          card.classList.add('hide');
        }
      };
    });
  }

  /****************************************************************/

  $('.video_mock')[0].src = imgVimeo;

  $('.contact__form').on('submit', (e) => {
    e.preventDefault();
  });
}

app();

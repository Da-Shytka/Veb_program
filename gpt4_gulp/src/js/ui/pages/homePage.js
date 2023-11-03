import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initExceeding from "./../components/initExceeding.js";
import initBegin from "./../components/initBegin.js";
import initBlogText from "./../components/initBlogText.js";
import initBlog from "./../components/initBlog.js";
import initFooter from "./../components/initFooter.js";
import initEnd from "./../components/initEnd.js";
import initBurger from "./../components/initBurger.js";

const initHomePage = (element) => {
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section exceeding_expectation"></section>
    <section class="section begin"></section>
    <section class="section blog_text"></section>
    <section class="section blog"></section>
    <section class="section footer"></section>
    <section class="section end"></section>
  `;

  element.insertAdjacentHTML("beforeend", template);
};

const rootNode = document.querySelector("#root");

const homePage = () => {
  // инициализация элементов Главной страницы
  initHomePage(rootNode);

  // инициализация шапки страницы с мок датой
  initHeader();

  // инициализация хиро раздела
  initHero();

  // инициализация хиро раздела
  initBrands();

  // инициализация хиро раздела
  initWhatIsGpt();

  // инициализация раздела "Будущее наступило" с мок датой
  initFutureHere();

  // инициализация раздела "Превосходя все ожидания"
  initExceeding();

  // инициализация раздела "Зарегистрироваться" с кнопкой начать
  initBegin();

  // инициализация раздела "Блог Текст" с 5 картинками
  initBlogText();

  // инициализация раздела "Блог" с 5 картинками
  initBlog();

  // инициализация раздела "Ссылки"
  initFooter();

  // инициализация раздела "Конец"
  initEnd();

  // инициализация бургера для адаптивного меню
  initBurger();
};

export default homePage;

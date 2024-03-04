"use strict";

// CONST
const startContainer = document.querySelector(".sp-start");
const startBtnElement = document.querySelector(".sp-start__btn");
const questionsContainer = document.querySelector(".sp-questions");
const formElement = document.querySelector(".sp-question__form");
const questionsBtnElement = document.querySelector(".sp-question__btn");
const questionBgElement = document.querySelector(".sp-question__bg");
const resultsContainer = document.querySelector(".sp-result");
const resultsFormElement = document.querySelector(".sp-result__form");

// VALUEBALES
let question;
let currentQuestion = 0;
let selectedSequences = [];

// FUNCTIONS
const handleStartButtonClick = () => {
  startContainer.classList.add("hidden");
  questionsContainer.classList.remove("hidden");
  renderCurrentQuestion();
};

const renderCurrentQuestion = () => {
  const question = questions[currentQuestion];
  let optionsHtml = "";

  question.options.forEach((option, index) => {
    const iconHtml = option.icon ? `<img src="${option.icon}" alt="" class="sp-question__icon" /> ` : "";
    const faceHtml = option.face ? `<img src="${option.face}" alt="" class="sp-question__icon" /> ` : "";
    const descHtml = option.desc ? `<p class="sp-question__desc">${option.desc}</p>` : "";

    optionsHtml += `<div class="sp-question__option">
        <label class="sp-question__label">
          <input class="sp-question__input" type="radio" name="option" value="${index}">
          <span class="sp-question__text">${option.text}</span>
        </label>
        ${iconHtml}
        ${faceHtml}
        ${descHtml}
      </div>`;
  });

  formElement.innerHTML = `
        <h1 class="sp-question__title">${question.title}</h1>
        <div class="sp-question__options options--${currentQuestion + 1}">${optionsHtml}</div>`;

  currentQuestion === 0
    ? (questionBgElement.style.background = "#f9f9f9 url(img/bg1.png) center no-repeat")
    : (questionBgElement.style.background = "");

  currentQuestion === questions.length - 1
    ? ((questionsBtnElement.textContent = "смотреть результаты"), (questionsBtnElement.style.maxWidth = "226px"))
    : ((questionsBtnElement.textContent = "далее"), (questionsBtnElement.style.maxWidth = "120px"));
};

const nextQuestion = () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    return;
  }

  if (selectedOption) {
    selectedSequences.push(selectedOption.value);
  }

  currentQuestion < questions.length - 1 ? (currentQuestion++, renderCurrentQuestion()) : showResults();
};

const getProductBySequence = (sequence) => {
  return products.find((product) => product.sequences.includes(sequence)); // возвращает продукт с sequences = selectedSequences.join("")
};

const showResults = () => {
  questionsContainer.classList.add("hidden");
  resultsContainer.classList.remove("hidden");

  const product = getProductBySequence(selectedSequences.join(""));

  if (product) {
    resultsFormElement.innerHTML = `
    <img src="${product.img}" alt="" class="sp-result__img">
    <p class="sp-result__name">${product.name}</p>
    <p class="sp-result__desc">${product.desc}</p>
    <a href="${product.href}" class="sp-result__btn" target="_blank">купить</a>
    `;
  }
};

// LISTENERS
startBtnElement.addEventListener("click", handleStartButtonClick);
questionsBtnElement.addEventListener("click", nextQuestion);

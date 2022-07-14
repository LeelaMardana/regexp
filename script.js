"use strict";
const formValidation = () => {
  const fields = document.querySelectorAll("input");
  const ruTextInput = document.getElementById("ru-text");
  const enTextInput = document.getElementById("en-text");
  const numberInput = document.getElementById("number");
  const form = document.getElementById("form");

  const removeValidation = () => {
    const have = form.querySelectorAll(".error");
    const attention = form.querySelectorAll(".attention");

    attention.forEach((item) => {
      item.classList.remove("attention");
    });

    have.forEach((item) => {
      item.remove();
    });
  };

  const checkEmpty = () => {
    fields.forEach((item, index) => {
      if (item.value.trim().length === 0) {
        const error = document.createElement("span");
        error.classList.add("error");
        error.textContent = "Заполните пустое поле*";
        fields[index].parentNode.append(error);
        item.parentNode.classList.add("attention");
      }
    });
  };

  const checkRuInput = () => {
    if (/[^а-яА-Я]/g.test(ruTextInput.value)) {
      const error = document.createElement("span");
      error.classList.add("error");
      error.textContent = "Разрешено писать только на русском*";
      ruTextInput.parentNode.append(error);
      ruTextInput.parentNode.classList.add("attention");
    }
  };

  const checkEnInput = () => {
    if (/[^a-zA-Z]/g.test(enTextInput.value)) {
      const error = document.createElement("span");
      error.classList.add("error");
      error.textContent = "Разрешено писать только на английском*";
      enTextInput.parentNode.append(error);
      enTextInput.parentNode.classList.add("attention");
    }
  };

  const checkNumInput = () => {
    if (/[^\d\+]/g.test(numberInput.value)) {
      const error = document.createElement("span");
      error.classList.add("error");
      error.textContent = "Разрешено писать только цифры*";
      numberInput.parentNode.append(error);
      numberInput.parentNode.classList.add("attention");
    }
  };

  //отслеживание потери заполненых инпутов
  fields.forEach((item) => {
    item.addEventListener("blur", (e) => {
      if (e.target.value.trim() !== "") {
        e.target.parentNode
          .querySelector(".label-name")
          .classList.add("filled");
      } else {
        e.target.parentNode
          .querySelector(".label-name")
          .classList.remove("filled");
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    removeValidation();

    checkEmpty();
    checkRuInput();
    checkEnInput();
    checkNumInput();

    const has = form.querySelector(".error");
    if (has) {
      has.parentNode.querySelector("input").focus();
    } else {
      alert("Форма отправлена");
    }
  });
};
formValidation();

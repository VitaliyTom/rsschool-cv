import { result } from "./content_porfolio.js";

const languageCode = document.querySelector(".language_code");
const languageButton = document.querySelector(".language_button");

const javaScript = document.querySelector(".java_script");
const java = document.querySelector(".java");

const portfolioList = document.querySelector(".portfolio_list");

if (portfolioList.children.length === 0) {
  portfolioList.insertAdjacentHTML("afterbegin", result.js.jsContent);
  document
    .querySelector(".first-name")
    .insertAdjacentHTML("beforeEnd", result.js.frontEnd);
}

languageCode.addEventListener("click", (event) => {
  if (event.target.closest(".java_script")) {
    portfolioListRemove();

    portfolioList.insertAdjacentHTML("afterbegin", result.js.jsContent);
    document.querySelector(".position").remove();

    document
      .querySelector(".first-name")
      .insertAdjacentHTML("beforeEnd", result.js.frontEnd);
    java.classList.remove("active");
    javaScript.classList.add("active");
  }

  if (event.target.closest(".java")) {
    const portfolioList = document.querySelector(".portfolio_list");
    portfolioListRemove();

    portfolioList.insertAdjacentHTML("afterbegin", result.java.javaContent);
    document.querySelector(".position").remove();
    document
      .querySelector(".first-name")
      .insertAdjacentHTML("beforeEnd", result.java.BackEnd);
    javaScript.classList.remove("active");
    java.classList.add("active");
  }
});

languageButton.addEventListener("click", (event) => {
  const langAll = Array.from(document.querySelectorAll(".lang"));

  if (event.target.closest(".lang")) {
    langAll.forEach((el) => {
      el.classList.remove("active");
    });

    event.target.closest(".lang").classList.add("active");
  }
});

function portfolioListRemove() {
  Array.from(portfolioList.children).forEach((el) => {
    el.remove();
  });
}

function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poemText", {
    strings: "Nature's first green is gold,",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poemText", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instruction = document.querySelector("#poemInput");
  let apiKey = "29ed0c9b3bb7403d12fta706a5o72f1c";
  let prompt = `Generate a poem about ${instruction.value}`;
  let context =
    "You are a poet who loves writing ethereal poems . You mission is to generate a 4 line poem in and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poemText");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Beautiful poem about ${instruction.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

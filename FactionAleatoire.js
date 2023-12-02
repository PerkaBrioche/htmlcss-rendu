let currentQuestion = 0;
let answers = [];

const questions = [
  "Quel animal préfères-tu ?",
  "Quelle couleur préfères-tu ?",
  "Quels sont les adjectifs vous décrivent le mieux ?",
];

const answersOptions = [
  ["Lion", "Blaireau", "Aigle", "Serpent"],
  ["Jaune", "Marron", "Blanc", "Vert"],
  ["Determiné", "Rusé", "Habile", "Patient"],
];

function nextQuestion(answer) {
  answers.push(answer);
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}
function showQuestion() {
  document.getElementById("question").innerText = questions[currentQuestion];
  let buttons = document
    .getElementById("answers")
    .getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = answersOptions[currentQuestion][i];
  }
}
function showResult() {
  let resultElement = document.getElementById("result");
  resultElement.style.display = "block";

  let houseResult = determineHouse();
  resultElement.innerText = `Tu es à ${houseResult} !`;
  switch (houseResult) {
    case "Gryffondor":
      resultElement.style.color = "red";
      resultElement.style.backgroundColor = "gold";
      document.getElementById("result-image").src = "Images/Griffondor.png";
      break;
    case "Poufsouffle":
      resultElement.style.color = "black";
      resultElement.style.backgroundColor = "yellow";
      document.getElementById("result-image").src = "Images/poufsoufle.png";
      break;
    case "Serdaigle":
      resultElement.style.color = "blue";
      resultElement.style.backgroundColor = "silver";
      document.getElementById("result-image").src = "Images/Serdaigle.png";
      break;
    case "Serpentard":
      resultElement.style.color = "green";
      resultElement.style.backgroundColor = "darkgreen";
      document.getElementById("result-image").src = "Images/Serpentard.png";
      break;
    default:
      break;
  }
}
function determineHouse() {
  let houseCounts = {
    Gryffondor: 0,
    Poufsouffle: 0,
    Serdaigle: 0,
    Serpentard: 0,
  };
  answers.forEach((answer) => {
    if (answer === "Lion") {
      houseCounts.Gryffondor++;
    } else if (answer === "Blaireau") {
      houseCounts.Poufsouffle++;
    } else if (answer === "Aigle") {
      houseCounts.Serdaigle++;
    } else if (answer === "Serpent") {
      houseCounts.Serpentard++;
    }
  });
  let result = Object.keys(houseCounts).reduce((a, b) =>
    houseCounts[a] > houseCounts[b] ? a : b
  );
  return result;
}
showQuestion();

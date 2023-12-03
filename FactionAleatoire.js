let questionActuelle = 0;
let reponses = [];
const questions = [
  "Quel animal préfères-tu ?",
  "Quelle couleur préfères-tu ?",
  "Quels sont les adjectifs vous décrivent le mieux ?",
];
const reponsesOptions = [
  ["Lion", "Blaireau", "Aigle", "Serpent"],
  ["Jaune", "Marron", "Blanc", "Vert"],
  ["Determiné", "Rusé", "Habile", "Patient"],
];
function nextQuestion(reponse) {
  reponses.push(reponse);
  questionActuelle++;
  if (questionActuelle < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}
function showQuestion() {
  document.getElementById("question").innerText = questions[questionActuelle];
  let buttons = document
    .getElementById("reponses-bouttons")
    .getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = reponsesOptions[questionActuelle][i];
  }
}
function showResult() {
  let resultElement = document.getElementById("result");
  resultElement.style.display = "block";
  let houseResult = determineHouse();
  let resultDescription = getDescription(houseResult);
  resultElement.innerText = `Tu es à ${houseResult} !`;
  let descriptionElement = document.getElementById("result-description");
  descriptionElement.innerText = resultDescription;
  descriptionElement.style.display = "block";
  let resultImage = document.getElementById("result-image");
  resultImage.style.display = "block";
  switch (houseResult) {
    case "Gryffondor":
      resultElement.style.color = "red";
      resultElement.style.backgroundColor = "gold";
      resultImage.src = "Images/Griffondor.png";
      break;
    case "Poufsouffle":
      resultElement.style.color = "black";
      resultElement.style.backgroundColor = "yellow";
      resultImage.src = "Images/poufsoufle.png";
      break;
    case "Serdaigle":
      resultElement.style.color = "blue";
      resultElement.style.backgroundColor = "silver";
      resultImage.src = "Images/Serdaigle.png";
      break;
    case "Serpentard":
      resultElement.style.color = "green";
      resultElement.style.backgroundColor = "darkgreen";
      resultImage.src = "Images/Serpentard.png";
      break;
    default:
      break;
  }
}
function getDescription(maison) {
  switch (maison) {
    case "Gryffondor":
      return "Gryffondor, la maison fondée par Godric Gryffondor, incarne la quintessence du courage et de la bravoure. Les étudiants de cette maison arborant fièrement les couleurs rouge et or se distinguent par leur détermination, leur esprit intrépide et leur volonté inébranlable. La salle commune, située dans la tour de Gryffondor, est accessible via le portrait de la Grosse Dame, et à l'intérieur, les élèves partagent un esprit d'entraide et de solidarité. Le fantôme de la maison, Sir Nicholas de Mimsy-Porpington, ajoute une touche de bonne humeur malgré son état de quasi-transparence. Gryffondor favorise les valeurs de l'héroïsme et de la loyauté, et ses membres sont souvent les premiers à se porter volontaires pour affronter les défis les plus périlleux.";
    case "Poufsouffle":
      return "Poufsouffle, fondée par Helga Poufsouffle, met en avant les valeurs de travail acharné, de loyauté et de justice. Les étudiants, arborant fièrement le jaune et le noir, forment une communauté chaleureuse et accueillante. La salle commune de Poufsouffle, située près des cuisines, est accessible en tapant le bon rythme sur un tonneau proche de la cuisine. Sous la houlette du fantôme, Le Moine Gras, Poufsouffle cultive un esprit d'équité et d'égalité. Les élèves de cette maison sont souvent appréciés pour leur nature compatissante, leur dévouement envers leurs pairs et leur volonté de travailler dur pour atteindre leurs objectifs.";

    case "Serdaigle":
      return "La maison de Serdaigle, fondée par Rowena Serdaigle, célèbre l'intelligence, la sagesse et la créativité. Les étudiants revêtent avec fierté les couleurs bleu et argent, et leur emblème, l'aigle, symbolise l'élévation des esprits perspicaces. La salle commune, nichée dans une tour à l'ouest du château, offre une vue imprenable sur les terres environnantes. L'accès à cet espace privilégié est réservé à ceux qui résolvent l'énigme astucieuse posée par le fantôme de la maison, Dame Grise. Les Serdaigle sont réputés pour leur curiosité insatiable et leur amour du savoir, et ils prospèrent dans un environnement qui encourage l'apprentissage et la réflexion.";

    case "Serpentard":
      return "Fondée par Salazar Serpentard, la maison de Serpentard incarne l'ambition, la ruse et la détermination. Les élèves, revêtant les couleurs vert et argent, sont choisis pour leur détermination à réussir et leur capacité à naviguer habilement dans les méandres de la vie sorcière. La salle commune, située sous le lac et accessible par une entrée cachée derrière un mur de pierre dans la cave, reflète le caractère secret et mystérieux de Serpentard. Le fantôme de la maison, le Baron Sanglant, ajoute une touche de gravité à l'environnement. Serpentard privilégie la réussite personnelle et l'excellence, bien que parfois au détriment de l'image parfois controversée de ses membres.";

    default:
      return "";
  }
}
function determineHouse() {
  let houseCounts = {
    Gryffondor: 0,
    Poufsouffle: 0,
    Serdaigle: 0,
    Serpentard: 0,
  };
  reponses.forEach((reponse) => {
    if (reponse === "Lion") {
      houseCounts.Gryffondor++;
    } else if (reponse === "Blaireau") {
      houseCounts.Poufsouffle++;
    } else if (reponse === "Aigle") {
      houseCounts.Serdaigle++;
    } else if (reponse === "Serpent") {
      houseCounts.Serpentard++;
    }
  });
  let result = Object.keys(houseCounts).reduce((a, b) =>
    houseCounts[a] > houseCounts[b] ? a : b
  );
  return result;
}
showQuestion();

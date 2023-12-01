function randomFaction() {
  const factions = ["Gryffondor", "Poufsouffle", "Serdaigle", "Serpentard"];
  const randomIndex = Math.floor(Math.random() * factions.length);
  const resultElement = document.getElementById("result");

  resultElement.textContent = `Vous êtes dans la faction ${factions[randomIndex]} !`;
  resultElement.ImageContent = `${Han[randomIndex]} !`;
}

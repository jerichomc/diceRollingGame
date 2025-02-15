document.getElementById('roll').addEventListener('click', rollDice);

function rollDice() {
  // Get all dice images
  const diceImages = document.querySelectorAll('.images img');

  //Roll the dice and update images
  diceImages.forEach((diceImage, index) => {
    // random number between 1 and 6
    const roll = Math.floor(Math.random() * 6) + 1;
    //update dice image based on roll
    diceImage.src = `assets/${roll}.JPG`;
  })
}
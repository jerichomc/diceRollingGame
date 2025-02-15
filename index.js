document.getElementById('roll').addEventListener('click', rollDice);

function rollDice() {
  // Get all dice images
  const diceImages = document.querySelectorAll('.images img');
  // Get the keep dice (checkboxes)
  const keepButtons = document.querySelectorAll('.keep-button');

  // Roll the dice and update images
  diceImages.forEach((diceImage, index) => {
    const keepButton = keepButtons[index];

    // If corresponding checkbox is not checked, roll the dice
    if (!keepButton.checked) {
      const roll = Math.floor(Math.random() * 6) + 1;

      // Update the dice image based on the roll
      diceImage.src = `assets/${roll}.JPG`;
    }
  });

  updateScore();
  
}

let score = {
    aces: 0,
    twos: 0,
    threes: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
    upperTotal: 0,
    lowerTotal: 0,
    grandTotal: 0
}

function updateScore() {
    // get current dice values
    const diceImages = document.querySelectorAll('.images img');
    const diceValues = Array.from(diceImages).map((img) => parseInt(img.src.split('/').pop().split('.')[0]));

    //count how mnay times each number appears
    for(let i = 1; i <=6; i++) {
        const count = diceValues.filter((value) => value === i).length;
        score[`${i === 1 ? 'aces' : i === 2 ? 'twos' : i === 3 ? 'threes' : i === 4 ? 'fours' : i === 5 ? 'fives' : 'sixes'}`] = count * i;
    }

    //update UI with totals
    document.getElementById('aces').children[1].textContent = score.aces;
    document.getElementById('twos').children[1].textContent = score.twos;
    document.getElementById('threes').children[1].textContent = score.threes;
    document.getElementById('fours').children[1].textContent = score.fours;
    document.getElementById('fives').children[1].textContent = score.fives;
    document.getElementById('sixes').children[1].textContent = score.sixes;

    // update total score
    score.upperTotal = score.aces + score.twos + score.threes + score.fours + score.fives + score.sixes;
    document.getElementById('upper-total').children[1].textContent = score.upperTotal;

    //update grand total
    score.grandTotal = score.upperTotal + score.lowerTotal;
    document.getElementById('grand-total').children[1].textContent = score.grandTotal;

}



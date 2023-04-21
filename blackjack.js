let showResult = document.getElementById("message-show");
let showSum = document.getElementById("sum");
let showCard = document.getElementById("cardshow");
let playerEl=document.getElementById("player-el");


let cards = [];
let sum = 0;
hasBlackjack = false;
isAlive = false;
let message = "";

let player={
    name : 'sharik',
    coins : '$999'
}
    let playerName=player.name;
    let playerCoin=player.coins;
    playerEl.textContent=playerName +" : "+playerCoin;
   // document.querySelector("#coin").innerHTML=playerCoin;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  hasBlackJack=false;
  let firstNum = getRandomCard();
  let secondNum = getRandomCard();
  cards = [firstNum, secondNum];
  sum = firstNum + secondNum;
  renderGame();
  // if(isAlive==true){
  //     renderGame();
  // }
  // else{
  //     message='game already start !';
  //     showResult.textContent=message;
  // }
}

function renderGame() {
  showCard.textContent = "Cards : " + cards;
  // for(let i=0;i<cards.length;i++){
  //     showCard.textContent+=cards[i];
  // }
  showSum.textContent = "Sum : " + sum;
  if (sum <= 20) {
    message = "Do you want to draw another card ?  ";
  } else if (sum === 21) {
    message = " you've got the blackjack  ";
    hasBlackJack=true;
    
  } else {
    isAlive = false;
    message = "you're loss the game ! ";
  }
  showResult.textContent = message;
}
function addCard() {
  if (isAlive === true && hasBlackJack===false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
  else{
    showResult.textContent= " game over !!"
  }
}

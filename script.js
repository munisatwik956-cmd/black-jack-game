let cards=[]
let hadBlackJack=false
let isAlive=false
let message=""
let sum=0
let player={
    name: "your name",
    chips: 259
}


let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEL=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")


playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive=true
    firstCard=getRandomCard()
    secondCard=getRandomCard()
    sum=firstCard+secondCard
    cards=[firstCard,secondCard]
    renderGame()
    
}
function renderGame(){
    if(sum < 21){
        message="Do you want to draw a new card ? 😊"
        isAlive=true
    }else if(sum == 21){
        message="Wohoo! You've got the blackjack! 😄"
        hadBlackJack=true
        isAlive=false
    }else{
        message="You're out of the game! 🥺"
        isAlive=false
    }
    messageEl.textContent=message
    sumEl.textContent = "Sum : " + sum
    //cardsEL.textContent = "cards : " + card
    cardsEL.textContent = "Cards : "
    for(let i=0;i<cards.length;i++){
        cardsEL.textContent += cards[i] + " "
    }
}

function newCard(){
    if(isAlive === true || hasBlackJack === true){
        let newCard=getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}

function getRandomCard(){
    let random=Math.floor((Math.random()*13)+1)
    if(random === 1){
        return 11
    }
    if(random >= 11 && random <=13){
        return 10
    }
    return random
}
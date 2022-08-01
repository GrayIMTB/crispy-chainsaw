let secondCard = 10
let firstCard = 7
let sum= firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")

function startGame()
{
    sumEl.textContent="Sum: "+sum
    if(sum < 21)
    {
        message ="Do you want to draw a new card?"
    } 
    else if (sum===21)
    {
        hasBlackJack = true
        message="You've got Blackjack!"
    }
    else
    {
        isAlive = false
        message="You're out of the game!"
    } 
}
messageEl.textContent = message
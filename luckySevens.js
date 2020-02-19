// rollDice() returns a random number from 1-6 (inclusive)
function rollDice () {
    return Math.floor(Math.random() * 6) + 1;
}

function play() {

    document.getElementById("resultTable").style.display = "none"; //Resetting results

    var startBet = parseInt(document.getElementById("startingBet").value); 
    var currBet = startBet;
    var rollCount = 0;
    var maxBet = startBet;
    var rollCountAtMaxBet = 0;

    //Discarding invalid entries
    if(startBet <= 0 || startBet == "") {
        alert("Please enter a positive dollar amount greater than 0");
        document.getElementById("startingBet").value = "";
        return false;
        
    }

    //Running bets until betting money is gone.
    while (currBet > 0) {
        var dice1 = rollDice();
        var dice2 = rollDice();
    
        if (dice1 + dice2 == 7) {
            currBet += 4;
        }
        else {
            currBet -= 1;
        }

        rollCount ++;

        if (currBet > maxBet) {
            maxBet = currBet;
            rollCountAtMaxBet = rollCount;
        }
    }

    //Displaying betting results on table.
    document.getElementById("startBetResult").innerText = startBet;
    document.getElementById("totalRolls").innerText = rollCount;
    document.getElementById("highestWon").innerText = maxBet;
    document.getElementById("RollHighestAmount").innerText = rollCountAtMaxBet;
    document.getElementById("resultTable").style.display = "block";
    
    return false;
}

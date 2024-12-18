// Initialize character data
var player = {
    name: "Goku",
    health: 100
};

var opponent = {
    name: "Vegeta",
    health: 100
};

// Function to simulate the player's attack
function playerAttack() {
    // Random damage between 10 and 30
    var damage = Math.floor(Math.random) * 21 + 10;
    opponent.health -= damage;
    return damage;
}

// Function to simulate the opponent's attack
function opponentAttack() {
    // Random damage between 10 and 30
    var damage = Math.floor(Math.random() * 21) + 10;
    player.health -= damage;
    return damage;
}

// Function to update health display
function updateHealthDisplay() {
    document.getElementById("playerHealth").textContent = `Health: ${player.health}`;
    document.getElementById("opponentHealth").textContent = `Health: ${opponent.health}`;
}

// Function to check if anyone's health is 0 or below
function checkBattleStatus() {
    if (player.health <= 0 && opponent.health <= 0) {
        return "It's a draw!";
    } else if (player.health <= 0) {
        return `${opponent.name} wins!`;
    } else if (opponent.health <= 0) {
        return `${player.name} wins!`;
    }
    return null;
}

// Event listener for attack button
document.getElementById("attackButton").addEventListener("click", function() {
    // Player's attack
    var playerDamage = playerAttack();
    var resultText = `${player.name} attacks ${opponent.name} for ${playerDamage} damage!<br>`;

    // Check if the opponent is defeated after the player's attack
    if (opponent.health <= 0) {
        resultText += `${opponent.name} is defeated! ${player.name} wins!`;
        document.getElementById("battleResult").innerHTML = resultText;
        document.getElementById("attackButton").disabled = true;
        return;
    }

    // Opponent's counterattack
    var opponentDamage = opponentAttack();
    resultText += `${opponent.name} attacks ${player.name} for ${opponentDamage} damage!<br>`;

    // Check if the player is defeated after the opponent's attack
    if (player.health <= 0) {
        resultText += `${player.name} is defeated! ${opponent.name} wins!`;
        document.getElementById("battleResult").innerHTML = resultText;
        document.getElementById("attackButton").disabled = true;
        return;
    }

    // Update health displays
    updateHealthDisplay();

    // Display battle result
    var battleStatus = checkBattleStatus();
    if (battleStatus) {
        document.getElementById("battleResult").innerHTML = battleStatus;
        document.getElementById("attackButton").disabled = true;
    } else {
        document.getElementById("battleResult").innerHTML = resultText;
    }
});
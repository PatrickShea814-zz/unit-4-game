
window.onload = function () {
    document.getElementById("my_audio").play();
};

var gameStart = {
    targetNumber: Math.floor(Math.random() * 102) + 19,
    wins: 0,
    losses: 0,
    totalPoints: 0 //This may not be needed and need to recheck jquery further down
};

function gameReset() {
    gameStart.targetNumber = Math.floor(Math.random() * 102) + 19;
    gameStart.totalPoints = 0;
    $("#randNumber").text(gameStart.targetNumber);
}



$("#randNumber").text(gameStart.targetNumber);

//Sets each crystal to have random number then stored to an array.
var crystalOne = Math.floor(Math.random() * 13) + 1;
var crystalTwo = Math.floor(Math.random() * 13) + 1;
var crystalThree = Math.floor(Math.random() * 13) + 1;
var crystalFour = Math.floor(Math.random() * 13) + 1;

var crystalArr = [crystalOne, crystalTwo, crystalThree, crystalFour];

for (var i = 0; i < crystalArr.length; i++) {

    var crysImage = [
        'assets/images/crystal-307264_1280.png',
        'assets/images/crystal-307265_1280.png',
        'assets/images/imageedit_3_7797246478.png',
        'assets/images/imageedit_5_8015985738.png'
    ];

    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystalChoice");
    imageCrystal.addClass("col-md-3");


    imageCrystal.attr("src", crysImage[i]); //Why images won't pull?


    imageCrystal.attr("data-crystalValue", crystalArr[i]);

    $("#crystals").append(imageCrystal);

}

$(".crystalChoice").on("click", function () {

    var crystalValue = ($(this).attr("data-crystalValue"));

    crystalValue = parseInt(crystalValue);

    gameStart.totalPoints += crystalValue;

    $("#pointTotal").text(gameStart.totalPoints);
    $("#pointsAdded").text(" + " + crystalValue);


    if (gameStart.totalPoints === gameStart.targetNumber) {
        alert("You have defeated the trolls! Keep your money and move along!");
        gameStart.wins++;
        $("#numWins").text(gameStart.wins);
        gameReset();
    } else if (gameStart.totalPoints > gameStart.targetNumber) {
        alert(`You lose! You now must pay the troll toll in the amount ${gameStart.targetNumber} crystals or be eaten!`);
        gameStart.losses++;
        $("#numLosses").text(gameStart.losses);
        gameReset();
    }
});

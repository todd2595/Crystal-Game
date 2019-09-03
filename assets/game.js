var flower = {
    blue:
    {
        name: "blue",
        value: 0
    },
    green:
    {
        name: "green",
        value: 0
    },
    pink:
    {
        name: "pink",
        value: 0
    },
    yellow:
    {
        name: "yellow",
        value: 0
    }
};
var score = 0;
var targetScore = 0;
var losses = 0;
var wins = 0;

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var reset = function () {

    // Reset the Current Score
    score = 0;

    // Set a new Target Score (between 19 and 120)
    targetScore = getRandom(19, 120);

    // Set different values for each of the flowers (between 1 and 12)
    flower.blue.value = getRandom(1, 12);
    flower.pink.value = getRandom(1, 12);
    flower.green.value = getRandom(1, 12);
    flower.yellow.value = getRandom(1, 12);

    // Change the HTML to reflect all of these changes
    $("#score").text(score);
    $("#targetScore").text(targetScore);


    // Testing Console
    console.log("-----------------------------------");
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + flower.blue.value + " | Green: " + flower.green.value + " | pink: " + flower.pink.value +
        " | Yellow: " + flower.yellow.value);
    console.log("-----------------------------------");
};

var checkWin = function () {

    if (score > targetScore) {
        alert("You LOSE!")
        ++losses;
        $("#losses").text(losses);
        reset();
    }
    else if (score === targetScore) {
        alert("You Win!")

        ++wins;
        $("#wins").text(wins);
        reset();
    }

}

var keepingScore = function (clickedFlower) {
    score += clickedFlower.value
    $("#score").text(score);

    // Call the checkWin Function
    checkWin();
}


reset();
$("#blue").click(function () {
    keepingScore(flower.blue);
});

$("#pink").click(function () {
    keepingScore(flower.pink);
});

$("#green").click(function () {
    keepingScore(flower.green);
});

$("#yellow").click(function () {
    keepingScore(flower.yellow);
});
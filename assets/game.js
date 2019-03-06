var losses;
var wins;
var score = 0;
var clickValue = Math.floor(Math.random() * 12) + 1;
var clickValue2 = Math.floor(Math.random() * 13) + 1;
var clickValue3 = Math.floor(Math.random() * 14) + 1;
var clickValue4 = Math.floor(Math.random() * 11) + 1;
var goal = Math.floor(Math.random() * 112) + 19;
reset();
$(".wins").text("Wins " + wins);
$(".losses").text("losses " + losses)

function reset() {
    score = 0;
    goal = Math.floor(Math.random() * 112) + 19;
    //var clickValue = Math.floor(Math.random()*12) + 1;

    $(".goal").text("the score you need is " + goal);
}


$(".redRock").on("click", function () {
    $(".redRock").attr("click-value", clickValue);
    //var crystalValue = ($(this.attr("click-value")));
    //clickValue = parseInt(clickValue);
    score += clickValue;
    alert("Your score is " + score)
    win();
});
$(".redRock2").on("click", function () {
    $(".redRock").attr("click-value", clickValue2);
    //var crystalValue = ($(this.attr("click-value")));
    //clickValue = parseInt(clickValue);
    score += clickValue2;
    alert("Your score is " + score)
    win();
});
$(".redRock3").on("click", function () {
    $(".redRock").attr("click-value", clickValue3);
    //var crystalValue = ($(this.attr("click-value")));
    //clickValue = parseInt(clickValue);
    score += clickValue3;
    alert("Your score is " + score)
    win();
});
$(".redRock4").on("click", function () {
    $(".redRock").attr("click-value", clickValue4);
    //var crystalValue = ($(this.attr("click-value")));
    //clickValue = parseInt(clickValue);
    score += clickValue4;
    alert("Your score is " + score)
    win();
});



//keeping score
//if (goal > score){
function win() {
    if (goal === score) {
        alert("You WIN!")
        ++wins;
        reset();
    }
    if (goal <= score) {
        alert("You LOSE!")
        reset();
        ++losses;
    }
}

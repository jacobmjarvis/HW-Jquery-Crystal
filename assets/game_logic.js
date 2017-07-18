//variables 
var wins = 0;
var lost = 0;
var score = 0;
// var result = 0;

//computer random number generation 
var computerGuess = parseInt(Math.floor(Math.random() * 101) + 19);
$(".randomNumber").html(computerGuess);

//converts the random string into int
var stone1 = parseInt(Math.floor(Math.random() * 12) + 1);
var stone2 = parseInt(Math.floor(Math.random() * 12) + 1);
var stone3 = parseInt(Math.floor(Math.random() * 12) + 1);
var stone4 = parseInt(Math.floor(Math.random() * 12) + 1);


//reset the game after user finishes game
function reset() {
    score = 0;
    $("#score").html("Your Score is : "+score);
    computerGuess = parseInt(Math.floor(Math.random() * 101) + 19);
    $(".randomNumber").html(computerGuess);
    stone1 = parseInt(Math.floor(Math.random() * 12) + 1);
    stone2 = parseInt(Math.floor(Math.random() * 12) + 1);
    stone3 = parseInt(Math.floor(Math.random() * 12) + 1);
    stone4 = parseInt(Math.floor(Math.random() * 12) + 1);
    console.log("computerGuess: " + computerGuess);
    console.log("stone1: " + stone1);
    console.log("stone2: " + stone2);
    console.log("stone3: " + stone3);
    console.log("stone4: " + stone4);
    console.log("**********************");
    

}


$(document).ready(function() {
//onclick event for the crystals
    $(".image").on("click", function() {
        if ($(this).attr("class") === "image") {
            if ($(this).attr("id") === "stone1") {
                score = parseInt(score) + parseInt(stone1);
                console.log("SCORE1: " + score);
            }
            if ($(this).attr("id") === "stone2") {
                score = parseInt(score) + parseInt(stone2);
                console.log("SCORE2: " + score);
            }
            if ($(this).attr("id") === "stone3") {
                score = parseInt(score) + parseInt(stone3);
                console.log("SCORE3: " + score);
            }
            if ($(this).attr("id") === "stone4") {
                score = parseInt(score) + parseInt(stone4);
                console.log("SCORE4: " + score);
            }
            
        }
        console.log("final score on click " + score);
        $("#score").html("Your Score is : "+score);

        //increases the win or lost counter depending on the result
        if (score === computerGuess) {
            wins++;
            console.log("You win : " + wins);
            $("#winn").html("So Dope, You Win!");
            $("#won").html("Won :"+wins);
            reset();
        } else if (score > computerGuess) {
            lost++;
            console.log("lost : " + lost);
            $("#winn").html("You Loose, Try Again!");
            $("#lost").html("Lost :"+lost);
            reset();
        }
    })

});
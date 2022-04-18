let images = ["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg",
"dice-06.svg"];
let dice = document.querySelectorAll("img");

function roll(){
    //var userInput = prompt("Please enter your bet");
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue);
        
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        var userInput = prompt("Please enter your bet");
        document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue +1) + (dieTwoValue + 1) );
        document.querySelector("#user").innerHTML = "Your bet was " + (userInput);
        if ((dieOneValue + dieTwoValue) >= userInput){
            //document.querySelector("#userWon").innerHTML = "You Won!";
             
           //alert(" You Win! ");
           document.querySelector("#user").innerHTML = "Your bet was " + (userInput)+". You Won!";
        }
        else{
            //document.querySelector("#userLost").innerHTML = "You Lose!";
             
            //alert(" You Lose!");
            document.querySelector("#user").innerHTML = "Your bet was " + (userInput)+". You Lost!";
        }
    },
    1000
    );
}
roll();
$(document).ready(function(){
   
    var wins= 0;
    var losses = 0;
    var totalScore = 0;
    var randomNumber;

    function resetGame(){

        totalScore = 0;
        //generate a random number for the random number,
        //have to either have the number above the max or add one to get the range desired
        randomNumber = Math.floor(Math.random() * (121-19) + 19);
        console.log("Random number: " + randomNumber);

        //generate a random number for each button, 
        //have to either have the number above the max or add one to get the range desired
        var valueGandalf = Math.floor(Math.random() * (13-1) + 1);//max number (121) not included
        console.log("Gandalf's value: " + valueGandalf);
        var valueHobbits = Math.floor(Math.random() * (13-1) + 1); 
        console.log("Hobbits' value: " + valueHobbits);
        var valueAragorn = Math.floor(Math.random() * (13-1) + 1);
        console.log("Aragorn's value: " + valueAragorn);
        var valueBoromir = Math.floor(Math.random() * (13-1) + 1);
        console.log("Boromir's value: " + valueBoromir);
        
        //give the buttons these values.val() or .attr()
        $("button.gandalf").attr("data-value", valueGandalf); //assigning values to buttons
        $("button.hobbits").attr("data-value", valueHobbits);
        $("button.aragorn").attr("data-value", valueAragorn);
        $("button.boromir").attr("data-value", valueBoromir);
        //print the random number 
        $(".randomNumber").html("<h2> " + randomNumber + " </h2>");
        //print the total score
        $(".totalScore").html("<h2>Total Score: </h2> <h2> " + totalScore + " </h2>");  
    }

    resetGame();

    function updateGame() {
        $(".totalScore").html("<h2>Total Score: </h2> <h2> " + totalScore + " </h2>");
    }

    function winLose() {
        //Winner:
        if (totalScore == randomNumber) {
            wins++;
            console.log("W: " + wins);
            $("#wins").html("Wins: " + wins );
            $("#win_lose").html("The Fellowship has been reunited!")
            
    
            resetGame();
        }
        //Loser:
        else if (totalScore > randomNumber) {
            losses++;
            console.log("L: " + losses);
            $("#losses").html("Losses: " + losses);
            $("#win_lose").html("The Fellowship is lost!")
            
    
            resetGame();
        }
    }
    //click function
    $(".characters").on("click", function(event){ 
        if (event.target.classList.contains("btn")){
            var value = $(this).attr("data-value");
            console.log(event); 
            totalScore = totalScore + parseInt(value); 
        } //getting the value and the button to match

        if (event.target.tagName=="IMG") {
            var value = $(event.target).parent().attr("data-value");
            console.log(event);
            totalScore = totalScore + parseInt(value);   
             
        }// getting the image within the button to pair with the value of the button

        console.log("Score: " + totalScore);  
        updateGame(); 
        winLose(); 
    });
});

// This is to set the Questions and Answers in an object as a single variable
var triviaQandA = [{
    //Question1:

        Question: "What was the first full length CGI move?",
        Answers: ["A Bugs Life", "Monsters Inc.", "Toy Story", "The Lion King"],
        correctAnswer: 2
    },
    //Question2:
    {
        Question: "Which of these is NOT a name of one of the Spice Girls?",
        Answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
        correctAnswer: 1
    },
    //Question3:
    {
        Question: "Which NBA team won the most titles in the 90s?",
        Answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
        correctAnswer: 3
    },
    //Question4:
    {
        Question: "Which group released the hit song, 'Smells Like Teen Spirit'?",
        Answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
        correctAnswer: 0

}];
console.log(triviaQandA);

//This is to set the variables of the game
var currentQuestion = 0;
var userAnswer;
var correctAnswer;
var correct= 0;
var incorrect= 0;
var timer = 10;
var countDown;

function beginTimer(){
    $(".timer").text("Time Remaining: " + timer + " seconds");
    --timer;
    if (timer === 0){
        endGame();
        $(".timer").remove();
    };
}

function gamePlay(){

    //This is to remove the start button when clicked
    $("#start-button").remove();

    //This is to start the countdown when gameplay function is called
    setInterval(beginTimer, 1000);

    //Clear Questions and Answers div
    $("#questions").empty();
    $("#answers").empty();
    $("#check").empty();
    $("#next").empty();
    $("#Submit").empty();
    $("#resutls").empty();
    $("#correct").empty();
    $("#wrong").empty();
    userAnswer = [];
    correct = 0;

    //This is to push the questions and answers from the object to the webpage
    $("#questions").html(triviaQandA[currentQuestion].Question);
    for (var i = 0; i < triviaQandA[currentQuestion].Answers.length; i++){
        $("#answers").append('<input type="radio" name="answers" id="answers2" value="' + [i] +'">' + triviaQandA[currentQuestion].Answers[i] + '<br>');
    };
    
    //This is to switch to the next question
    $("#next").append("<button id='next'> Next </button>");
    $("#next").on("click", function(){
        $("#questions").empty();
        $("#answers").empty();
        currentQuestion++;
        checkAnswer();
    });


    $("#Submit").append("<button id='Submit'> Submit </button>");
}

function checkAnswer(){

    $("#answers2").on("click",function(){
        userAnswer = $("answers input:radio[name=answers]:checked").val();
    });
    var userAnswerIndex = userAnswer;
    var correctAnswerString = triviaQandA[currentQuestion].Answers[triviaQandA[currentQuestion].correctAnswer];
    var correctAnswerIndex = triviaQandA[currentQuestion].correctAnswer;

    if (userAnswerIndex === correctAnswerIndex){
        $("#check").append("Correct! Good job!");
        correct++;
        gamePlay();
      
    }
    else if (userAnswerIndex === undefined){
        $("#check").append("Sorry! You ran out of time! The Correcrt Answer is: " + correctAnswerString);
        incorrect++;
        gamePlay();
   
    }
    else {
        $("#check").append("Wrong! The Correct Answer is: " + correctAnswerString);
        incorrect++;
        gamePlay();
    }
  
}

function results(){

    clearInterval(timer);

    //Remove timer and questions when quiz is complete
    $(".timer").remove();
    $("#questions").remove();
    $("#Submit").remove();

    //To show correct answers
    $("#results").text("Here are the Results!");
    $("#correct").append("Correct: " + correct);
    $("#wrong").append("Wrong: " + incorrect);    




}

//This is an on click function to start the game
$("#start-button").on("click",function(){
    gamePlay();
});

//This is an on click function to end the game
$("#Submit").on("click",function(){
    endGame();
});

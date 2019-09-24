// This is to create an on click function to initiate the game 
$(".game-play").click(function(){
    startGame();
});

// This is to create an on click function to end game and display results
$(".game-play").click(function(){
    endGame();
});

// This is to set the Questions and Answers in an object as a single variable

var triviaQandA = {
    Question1:
    {
        Question: "What was the first full length CGI move?",
        Answers: ["A Bugs Life", "Mosters Inc.", "Toy Story", "The Lion King"],
        correctAnswer: "Toy Story"
    },
    Question2:
    {
        Question: "Which of these is NOT a name of one of the Spice Girls?",
        Answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
        correctAnswer: "Fred Spice"
    },
    Question3:
    {
        Question: "Which NBA team won the most titles in the 90s?",
        Answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
        correctAnswer: "Chicago Bulls"
    },
    Question4:
    {
        Question: "Which group released the hit song, 'Smells Like Teen Spirit'?",
        Answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
        correctAnswer: "Nirvana"
    },

};


var correct= 0;
var incorrect= 0;
var score = 0;
var timer = 30,

function startGame(){

    //To clear the start button when game begins
    $("#start-button").remove();

    //This is to push the questions and asnwers after the start button has been clicked
    

    //The start the timer
}

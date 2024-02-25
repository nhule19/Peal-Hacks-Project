/*Add your Javascript here*/
var seaScore = 0; //Score the sea person score
var summitScore = 0; //Score the summit person score

var questionCount = 0; //Score the number of answers clicked on

// //Store HTML elements using the DOM
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");

var q7a1 = document.getElementById("q6a1");
var q7a2 = document.getElementById("q6a2");

q1a1.addEventListener("click", sea);
q1a2.addEventListener("click", summit);

q2a1.addEventListener("click", sea);
q2a2.addEventListener("click", summit);

q3a1.addEventListener("click", sea);
q3a2.addEventListener("click", summit);

q4a1.addEventListener("click", summit);
q4a2.addEventListener("click", sea);

q5a1.addEventListener("click", sea);
q5a2.addEventListener("click", summit);

q6a1.addEventListener("click", summit);
q6a2.addEventListener("click", sea);

q7a1.addEventListener("click", summit);
q7a2.addEventListener("click", sea);


function sea() {
    seaScore += 1;
    questionCount += 1;

    console.log("questionCount = " + questionCount + "seaScore" + seaScore);

    if (questionCount == 7) { 
    console.log("The quiz is done!") 
}
  //updateResult();
}


function summit() {
    summitScore += 1;
    questionCount += 1;

    console.log("questionCount = " + questionCount + "summitScore" + summitScore)

    if (questionCount == 7) { 
    console.log("The quiz is done!") 
}
  //updateResult();
}


function updateResult() {
    if (seaScore >= 4){ 
    result.innerHTML = "You are a sea person!"
    console.log("You are a sea person!");
}
    else if (summitScore >= 4) {
    result.innerHTML = "You are a summit person!"
    console.log("You are a summit person!");
}   
} 
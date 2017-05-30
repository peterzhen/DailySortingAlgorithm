var APP_ID = undefined;

var SORTINGALGORITHMS = [
  "Your daily sorting algorithm is Quick Sort",
  "Your daily sorting algorithm is Merge Sort",
  "Your daily sorting algorithm is In Place merge sort",
  "Your daily sorting algorithm is Heap Sort",
  "Your daily sorting algorithm is Insertion Sort",
  "Your daily sorting algorithm is Intro Sort",
  "Your daily sorting algorithm is Selection Sort",
  "Your daily sorting algorithm is Timsort",
  "Your daily sorting algorithm is Cube sort",
  "Your daily sorting algorithm is Shell sort",
  "Your daily sorting algorithm is Bubble Sort",
  "Your daily sorting algorithm is Binary Tree Sort",
  "Your daily sorting algorithm is Cycle Sort",
  "Your daily sorting algorithm is Library Sort",
  "Your daily sorting algorithm is Patience sorting",
  "Your daily sorting algorithm is Smooth Sort",
  "Your daily sorting algorithm is Strand Sort",
  "Your daily sorting algorithm is Tournament Sort",
  "Your daily sorting algorithm is Cocktail Sort",
  "Your daily sorting algorithm is Comb Sort",
  "Your daily sorting algorithm is Gnome Sort",
  "Your daily sorting algorithm is UnShuffle Sort",
  "Your daily sorting algorithm is Franceschini's Method",
  "Your daily sorting algorithm is Block Sort",
  "Your daily sorting algorithm is Odd Even Sort"
];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

var Question = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Question.prototype = Object.create(AlexaSkill.prototype);
Question.prototype.constructor = Question;

Question.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId + ", sessionId: " + session.sessionId);
};

Question.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewQuestionRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
Question.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId + ", sessionId: " + session.sessionId);
};

Question.prototype.intentHandlers = {
    "GetNewFactIntent": function (intent, session, response) {
        handleNewQuestionRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say give me my daily sorting algorithm, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

function handleNewQuestionRequest(response) {
    // Get a random space fact from the space facts list
    var questionIndex = Math.floor(Math.random() * SORTINGALGORITHMS.length);
    var randomQuestion = SORTINGALGORITHMS[questionIndex];

    // Create speech output
    var speechOutput = "Here's your Daily Sorting Algorithm: " + randomQuestion;
    var cardTitle = "Your Daily Sorting Algorithm";
    response.tellWithCard(speechOutput, cardTitle, speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the SpaceGeek skill.
    var question = new Question();
    question.execute(event, context);
};

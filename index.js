
var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

var DATASTRUCTURES = [
  "Your Daily Data Structure is Linked Lists.  Linked lists are good for small amounts of data and non predictable data.  Searching is slow and the insertion order matters when searching.   Linked Lists are generally used when data is frequently inserted and deleted.  Linked Lists have a Search Time Complexity of O. of N.  A constant insertion speed.  And time complexity of O. of N for deletion",
  "Your Daily Data Structure is Arrays.  For arrays, searching and deletion is slow.  Deletion is slow because an average of half the items must be moved to fill in the newly vacated cell.  You have fast access if the index is known.  For an ordered Array with a small amount data thats predictiable, search is faster than insertion.  For an unordered Array with a small amount of data thats predictable, insertion is faster than search.  Search and Deletion takes a time complexity of O. of N.  Insertion is constant time, assuming you are inserting at the end of the array.",
  "Your Daily Data Structure is Binary Search Tree.  Binary search trees are usually the first choice when arrays and linked lists seem slow for solving the problem.  It's good for large amounts of data, where key distribution is random.  Searching, insertion and deletion can be slow in worst case with O. of N. time complexity.  Average case is O. log N. Unbalanced trees reduce performance.",
  "Your Daily Data Structure is a Hash Table.  Hash Tables are good for large amounts of data, provides fast search and insertion.  This is the fastest data storage structure.  A hash table is not sensitive to the order in which the data is inserted.  The time complexity of searches, insertion and deletion is constant time.  If ordered traversal is necessary, a binary search tree is usually the better choice."
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
    //console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

Question.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    //console.log("onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewQuestionRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
Question.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    //console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

Question.prototype.intentHandlers = {
    "GetNewFactIntent": function (intent, session, response) {
        handleNewQuestionRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say give me my daily data structure, or, you can say exit... What can I help you with?", "What can I help you with?");
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
    var questionIndex = Math.floor(Math.random() * DATASTRUCTURES.length);
    var randomQuestion = DATASTRUCTURES[questionIndex];

    // Create speech output
    var speechOutput = "Here's your Daily Data Structure: " + randomQuestion;
    var cardTitle = "Your Daily Data Structure";
    response.tellWithCard(speechOutput, cardTitle, speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the SpaceGeek skill.
    var question = new Question();
    question.execute(event, context);
};

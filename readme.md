## Daily Data Structure

[Alexa Store Link][dailydatastructure]

[dailydatastructure]: https://www.amazon.com/THOS-Daily-Sorting-Algorithms/dp/B071DH61G8/ref=sr_1_2?s=digital-skills&ie=UTF8&qid=1496123003&sr=1-2&keywords=sorting

DailyDataStructure is an Alexa Skill built for Amazon Echo that helps programmers stay sharp by practicing programming data structures.

## Instructions

To use this Amazon Alexa Skill, follow the [link][dailydatastructure] to add the skill to your Amazon account.  This will enable the skill on all your Alexa enabled devices(Amazon Echo, Amazon Dot etc...).  To invoke DailyDataStructure simply say:

`"Alexa, open Daily Data Structure"`

This will start up the application and ask a random algorithms question for you to answer.

## The Code

ProgrammerQuiz is built using the `Amazon Alexa SDK` using Node and `JavaScript` as the language of choice.  Leveraging the `Alexa SDK`, I set up event listeners for specific voice commands to interact with the user when the program is active.  When a new request for a data structure is activated, a random data structure from the preset data is selected and is given to the user.

```javascript
function createSpeechObject(optionsParam) {
    if (optionsParam && optionsParam.type === 'SSML') {
        return {
            type: optionsParam.type,
            ssml: optionsParam.speech
        };
    } else {
        return {
            type: optionsParam.type || 'PlainText',
            text: optionsParam.speech || optionsParam
        }
    }
}
```

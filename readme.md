## Daily Sorting Algorithm

[Alexa Store Link][dailysortingalgorithm]

[dailysortingalgorithm]: https://www.amazon.com/THOS-Daily-Sorting-Algorithms/dp/B071DH61G8/ref=sr_1_2?s=digital-skills&ie=UTF8&qid=1496123003&sr=1-2&keywords=sorting

DailySortingAlgorithm is an Alexa Skill built for Amazon Echo that helps programmers stay sharp by practicing programming sorting algorithms.

## Instructions

To use this Amazon Alexa Skill, follow the [link][dailysortingalgorithm] to add the skill to your Amazon account.  This will enable the skill on all your Alexa enabled devices(Amazon Echo, Amazon Dot etc...).  To invoke DailySortingAlgorithm simply say:

`"Alexa, open Daily Sorting Algorithm"`

This will start up the application and provide you with a sorting algorithm.

## The Code

Daily Sorting Algorithm is built using the `Amazon Alexa SDK` using Node and `JavaScript` as the language of choice.  Leveraging the `Alexa SDK`, I set up event listeners for specific voice commands to interact with the user when the program is active.  When a new request for a sorting algorithm is activated, a random sorting algorithm from the preset data is selected and is given to the user.

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

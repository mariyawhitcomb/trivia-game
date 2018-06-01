Description
This repository contains the code for Mariya Whitcomb's WDI Project #1 - self-scoring trivia game.

Brief Example
A player is given a number of questions one at a time and three possible answers. Once an answer is selected, the player clicks the "submit" button which reveals whether the answer was correct or not. After all the questions have been answered, the final score is displayed along with a "high score" that is the user's highest score. When a player beats their high score an alert window will pop up.

User Stories
User should be able to see the question on the screen so they can read it.

User should be able to choose their answer to each question and press submit.

User should to able to know how many questions they have left.

User should be able to know how well they did.

Technologies used
This trivia application is built using HTML, CSS, and JavaScript

Approach
For this project, I drew out some initial wireframes on paper so I could see which elements were necessary and how I should label them. Then, I built the HTML framework for the necessary elements and added basic CSS styles so that each element appeared on the page in a logical spot (based on the wireframes).

Once I had the structure, I wrote the initial JavaScript functions to run the game. From there, I changed my logic to use JS to generate the questions which were previously stored in the html file. I also added a score to the game to be displayed at the end of the game. The high score is stored in local storage, and at the end of each game the score is compared to the high score to determine if a user's high score has changed.

Installation
Go to https://mariyawhitcomb.github.io/trivia-game/ 
Press START button to begin

Unsolved problems
The game could use few more features as such:
    Exit Game button
    Timer
    Providing User with correct answers when incorrect are chosen.
    Additional levels
as well as it could use some additional styling.



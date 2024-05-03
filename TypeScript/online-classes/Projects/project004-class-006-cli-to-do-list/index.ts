import inquirer from "inquirer"

// 1) Computer will generate a random number

// 2) User input for guessing number

// 3) Compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);  

const answers = await inquirer.prompt([
     {
         name:"userGuessedNumber",
         type:"number",
         message:"Try your luck and guess the number between 1-10 : ",
     }
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number");
}
else
{
    console.log("Sorry! You guessed the wrong number");
}

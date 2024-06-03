import inquirer from "inquirer";

console.log("CODE WITH UMAIR HASSAN MARRY : CLI CALCULATOR")
// Asking Question from users through Iquirer

let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firstnumber"},
    {message: "Enter Second Number", type: "number", name: "secondnumber"},
    {
        message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);

// Condtional Statements If-Else

if(answers.operator === "Addition"){
    console.log(answers.firstnumber + answers.secondnumber)
}
else if (answers.operator === "Subtraction"){
    console.log(answers.firstnumber - answers.secondnumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstnumber * answers.secondnumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstnumber / answers.secondnumber)
}
else{
    console.log("Invalid Input")
}
    

const age = parseInt(prompt("how old are you?"));
console.log(isNaN(age));

if(isNaN(age)) {
    console.log("Please write a number!");
} else {
    console.log("Alright!");
};
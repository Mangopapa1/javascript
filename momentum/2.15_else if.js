const age = parseInt(prompt("how old are you?"));

if (isNaN(age)) {
    console.log("Please write a number!");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can smoke")
}
 else {
    console.log("You are tod old");
}

true || true === true
false || true === true
true || false === true
false || false === false

true && true === true
false && true === false
true && false === false
false && false === false
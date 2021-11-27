function plus(a, b){
    console.log(a + b);
}

function divide(a, b){
    console.log(a / b)
}

plus(1, 2);
divide(8, 2);

const player = {
    name: "Luka",
    sayHello: function(otherPersonsName){
        console.log("hello!" + otherPersonsName + " Nice to meet you")
    }
}

console.log(player.name);
player.sayHello("lynn");
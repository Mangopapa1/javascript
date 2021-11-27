// const player =  {
//     name: "Luka",
//     age: 29,
// };
// console.log(player);

// player.name = "LukaRyu";
// console.log(player);

// player.sexy = "soon";
// console.log(player, console)

// function plus(a, b) {
//     console.log(a + b);

// }

// plus(1, 2)

const calculator = {
    plus: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    divide: function (a, b) {
        console.log(a / b);
    },
    power: function (a, b) {
        console.log(a ** b);
    }
};

calculator.plus(4, 2);
calculator.minus(4, 2);
calculator.divide(4, 2);
calculator.power(4, 2);

console.log(calculator.plus(2,3))
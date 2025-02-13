"use strict";

const ladder = {
    step: 0,
    up: function () {
        this.step += 1;
        return this;
    },
    down: function () {
        this.step -= 1;
        return this;
    },
    showStep: function () {
        console.log(this.step);
        return this;
    }
};
ladder.up().up().down().showStep();


// const ladder = {
//     step: 0,
//     up: function () {
//         ladder.step += 1;
//         return ladder;
//     },
//     down: function () {
//         ladder.step -= 1;
//         return ladder;
//     },
//     showStep: function () {
//         console.log(ladder.step);
//         return ladder;
//     }
// };
// ladder.up().up().down().showStep();
// console.log(ladder.step);




// const ladder = {
//     up: function () { // підніматиме вас на одну сходинку
//     },
//     down: function () { // опускатиме вас на одну сходинку
//     },
//     showStep: function () { // показує поточну сходинку
//     }
// };
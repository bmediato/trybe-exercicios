// Ao chamar a função doingThings:

const wakeUp = () => `Acordando!`;

const breakFast = () => `Bora tomar café!`;

const sleep = () => `Partiu dormir!`;

const doingThings = (callback) => callback();


console.log(doingThings(wakeUp));
console.log(doingThings(breakFast));
console.log(doingThings(sleep));
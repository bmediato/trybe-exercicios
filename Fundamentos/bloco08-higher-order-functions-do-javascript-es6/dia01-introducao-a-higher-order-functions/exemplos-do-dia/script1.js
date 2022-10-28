const wakeUp = () => 'Acordando!!';
const breakFast = () => 'Bora tomar café!!';
const sleep = () => 'partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(wakeUp));
console.log(doingThings(breakFast));
console.log(doingThings(sleep));
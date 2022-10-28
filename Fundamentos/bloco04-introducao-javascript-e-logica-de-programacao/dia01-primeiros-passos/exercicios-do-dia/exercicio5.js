const a = 60;
const b = 30;
const c = -90;
const soma = (a+b+c);
if(soma === 180) {
    console.log('true');
}
else if (a < 0 || b < 0 || c < 0) {
    console.log('angulo invalido');
}
else {
    console.log('false');
}

const custo = 1;
const valorVenda = 5;
const impostoSobreCusto = custo * 0.2;
const valorCustoTotal =  custo + impostoSobreCusto;
const lucro = valorVenda - valorCustoTotal;
const venda = lucro * 20000;

console.log('O valor de custo do produto é R$' + custo);
console.log('O imposto sobre o produto é R$' + impostoSobreCusto);
console.log('O custo total desse produto é R$' + valorCustoTotal);
console.log('O valor de venda é R$' + valorVenda);
console.log('O lucro desse produto é de R$' + lucro);
console.log('A empresa terá um lucro ao vender 20.000 produtos desse de R$' + venda);

let salarioBruto = 5012;
let novoSalarioInss = undefined;
let novoSalarioIR = undefined;
let inss =undefined; 
let ir =undefined;
let salarioLiquido = undefined

switch (salarioBruto) {
   case salarioBruto  <= 1556.94:
    inss = salarioBruto * 0.8;
    novoSalarioInss = salarioBruto - inss;
    break
   
    case salarioBruto > 1556.94 && salarioBruto <= 2594.92:
        inss = salarioBruto * 0.9;
        novoSalarioInss = salarioBruto - inss;
        break

        case salarioBruto > 2594.92 && salarioBruto <= 5189.82:
            inss = salarioBruto * 0.11;
            novoSalarioInss = salarioBruto - inss;
            break

            default:
                inss = 570,88;
                novoSalarioInss = salarioBruto - inss;

}
console.log(novoSalarioInss)
switch (novoSalarioInss) {
    case novoSalarioInss <= 1903.98:
        console.log('isento de imposto de renda');
        break

        case novoSalarioInss > 1903.98 && novoSalarioInss <=2826.65:
            ir = (0.075 * novoSalarioInss) - 142,80;
            novoSalarioIR = novoSalarioInss - ir;
            break

            case novoSalarioInss > 2826.65 && novoSalarioInss <= 3751.05:
                ir = (0.15 * novoSalarioInss) - 354,80;
                novoSalarioIR = novoSalarioInss - ir;
                break

                case novoSalarioInss > 3751,05 && novoSalarioInss<= 4664.68:
                    ir = (0.225 * novoSalarioInss) - 636.13;
                    novoSalarioIR = novoSalarioInss - ir;
                    break

                    default:
                        ir = (0.275 * novoSalarioInss) - 869.36;
                        novoSalarioIR = novoSalarioInss - ir;

}
console.log(novoSalarioIR)



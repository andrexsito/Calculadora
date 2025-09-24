const prompt = require("prompt-sync")()
let num1 =parseInt(prompt("introducsca el primer numero : "));
let signo= prompt("introdusca el signo, (/,*,-,+): ");
let num2 = parseInt(prompt ("introdusca el segundo numero : "));

function operacion(num1, signo, num2) {
    switch (signo) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            let resultado = num1 / num2;
            if (num2 === 0) {
                return ("no se puede dividir entre 0");
            } else {
                return resultado;
            }
        default:
            return ("signo no valido");
    }
}

console.log(operacion(num1, signo, num2));
let numero = 3;
let numeroTexto = 'Valor desconocido';

switch (numero) {
    case 1:
        numeroTexto = 'numero 1';
        break;
    case 2:
        numeroTexto = 'Numero 2';
        break
    case 3:
        numeroTexto = 'Numero 3';
        break
    case 4:
        numeroTexto = 'Numero 4';
    default:
        numeroTexto = 'Caso no encontrado';
}
console.log(numeroTexto)
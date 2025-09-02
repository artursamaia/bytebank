import { cliente } from "./Cliente.js";
import { CCorrente } from "./CCorrente.js";



const Cliente1 = new cliente();
Cliente1.nome = "Ricardo";
Cliente1.cpf = 11122233344;

const CCorrente1 =  new CCorrente();

CCorrente1.cliente = Cliente1;
CCorrente1.agencia = 1001 ;
CCorrente1.numeroConta = 1556271;


const Cliente2 = new cliente();
Cliente2.nome = "Larissa";
Cliente2.cpf = 22233344455;


const CCorrente2 =  new CCorrente();
CCorrente2.cliente = Cliente2;
CCorrente2.agencia = 1002;
CCorrente2.numeroConta = 8827171;




console.log(Cliente1);
console.log(CCorrente1);

console.log(CCorrente2);
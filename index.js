import { cliente } from "./Cliente.js";
import { CCorrente } from "./CCorrente.js";


const cliente1  =  new cliente();
const CCorrente1 =  new CCorrente(cliente1);

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233344 ;
CCorrente1.agencia = 1212 ;

CCorrente1.deposito(100);


const cliente2  =  new cliente();
const CCorrente2 =  new CCorrente(cliente2);

cliente2.nome = "Julia";
cliente2.cpf = 22233344455;
CCorrente2.agencia = 1212;

CCorrente2.deposito(100);





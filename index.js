import { cliente } from "./Cliente.js";
import { CCorrente } from "./CCorrente.js";



const Cliente1 = new cliente("Ricardo", 11122233344);

const CCorrente1 =  new CCorrente(Cliente1, 1001);
CCorrente1.numeroConta = 1556271;


const Cliente2 = new cliente("Larissa", 22233344455);

const CCorrente2 =  new CCorrente(Cliente2, 1002);
CCorrente2.numeroConta = 8827171;




console.log(CCorrente);
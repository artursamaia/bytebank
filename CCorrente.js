import { cliente } from "./Cliente.js";

export class CCorrente {
    #cliente ; // Atributo privado. 
    #saldo = 0 ; // Atributo privado. 
    
    agencia ;
    numeroConta ;

    
    set cliente(novoValor){
        if(novoValor instanceof cliente){
        this.#cliente = novoValor;
       }
    } 

    get cliente(){
        return this.#cliente;
    }

    get saldo(){
        return this.#saldo;
    }



    sacar(valorSacado) {
        if(this.#saldo < valorSacado){
            console.log("Não foi possivel realizar o saque, por que o saque é superior ao seu saldo, seu saldo é : ",this.#saldo);
            return;
        } else {
            this.#saldo -= valorSacado;
          console.log(this.cliente.nome,"Seu saldo é:",this.#saldo);
        }
    }

    deposito(valorDeposito) {
        if(valorDeposito < 1) {
            console.log("O deposito minino é R$ 1,00 !");
            return;
        } else {
            this.#saldo += valorDeposito;
           console.log(this.cliente.nome,"Seu saldo é:",this.#saldo);
        }
    }

    transferir(valor, conta){
       const valorSacado = this.sacar(valor);
        conta.deposito(valor);
    
    }


}
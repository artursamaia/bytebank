export class CCorrente {
    agencia ;
    cliente;

    
    #saldo = 0 ; // Atributo privado. 


    constructor(cliente){

        this.cliente = cliente;
    }

    sacar(valorSacado) {
        if(this.#saldo < valorSacado){
            console.log("Não foi possivel realizar o saque, por que o saque é superior ao seu saldo, seu saldo é : ",this.saldo);
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
}
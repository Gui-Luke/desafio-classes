class lOTR{

    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    ataque(){

        let ataque

            switch(this.tipo){
                case "Guerreiro":
                ataque = "Espada"
                break
    
                case "Mago":
                ataque = "Magia"
                break

                case "Ninja":
                ataque = "Shuriken"
                break

                case "Monge":
                ataque = "Artes Marciais"
                break

                default:
                ataque = "Ataque desconhecido"
                break
            }

        console.log(`O ${this.tipo} de nome ${this.nome} atacou usando ${ataque}.`)
    }
}

let heroi1 = new lOTR("Kratos", 105, "Guerreiro")
let heroi2 = new lOTR("Gandolf", 12200, "Mago")
let heroi3 = new lOTR("Naruto", 18, "Ninja")
let heroi4 = new lOTR("Bruce", 43, "Monge")

heroi1.ataque()
heroi2.ataque()
heroi3.ataque()
heroi4.ataque()
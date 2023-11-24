// Definindo a classe Heroi
class Heroi {
    // Construtor da classe
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para realizar um ataque
    atacar() {
        let ataque = "";

        // Determinando o tipo de ataque com base no tipo do herói
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque genérico";
        }

        // Exibindo a mensagem do ataque
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe Heroi
const heroi = new Heroi("Gandalf", 100, "mago");

// Realizando ataques
heroi.atacar(); // Saída: O mago Gandalf atacou usando magia

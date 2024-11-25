const prompt = require("prompt-sync")();

const lojas = []
let sair = false;
do {
    console.log("Shopping Menu: \n" +
        "[1] Para Adicionar Loja;\n" +
        "[2] Para mostrar todas as lojas;\n" +
        "[3] para sair\n");
    let escolha = parseInt(prompt("Digite a opção desejada: "))
    switch (escolha) {
        case 1:
            AdicionarLoja();
            break;
            case 2:
                MostrarLojas();
                break;
        case 3:
            console.log("Fechando o app.")
            sair = true
            break
        default:
            console.log("opção invalida.")
            break;
    }
} while (!sair)


function AdicionarLoja() {
    let nomeLoja = prompt("Digite o nome da loja: ");
    let tipoLoja = prompt("Digite o tipo da loja: ");
    lojas.push({ nomeLoja, tipoLoja });
    console.clear()
}

function MostrarLojas() {
    lojas.forEach((lojas) => {lojas});
    console.log(lojas)
}



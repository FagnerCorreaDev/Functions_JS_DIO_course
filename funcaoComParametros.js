// -> 1
// torrar("pão de forma", "Fagner\n")
// torrar("pão integral", "Raquel")

// function torrar(pao, nome) {
//     console.log("Torrada feita com " + pao)
//     console.log("Pedido de " + nome)
// }

// -> 2 Exemplo pra quando o parâmetro fica sem valor, ou seja, criamos um valor de default
// torrar("pão de forma", 19.90)
// torrar("pão integral", 29.90, "Raquel")

// function torrar(pao, valor, nome = "Cliente") { // definimos como valor padrão p/ parâmetro "Cliente"
//     console.log("Torrada feita com " + pao)
//     console.log("Pedido de " + nome)
//     console.log("Valor R$:" + valor)
// }

// -> 3
createStringConnection("db_products", "Fagner", "9876")

function createStringConnection(dataBaseName, user, pass) {
    console.log(`connect: DB_CONNECTED; user=${user}; pass=${pass}; initial_database=${dataBaseName}`)
}
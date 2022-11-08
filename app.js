let controleDeFluxo = 1
let ultimaPorta = [9, 9, 9]

const porta = () => {
    let conjunto = [0, 0, 0]
    for (let index = 0; index < conjunto.length; index++) {
        let sorteio = Math.round(Math.random() * 2 + 1)
        conjunto[index] = sorteio
    }
    return conjunto
}

const abrir_porta = (tentativas) => {
    for (let index = 0; index < tentativas; index++) {
        let novaPorta = porta()
        let c = 0

        for (let count = 0; count < 3; count++) {
            if (ultimaPorta[count] == novaPorta[count]) {
                c++
            }
        }
        console.log(
            `Quantidade de vezes em que tentou liberar as portas:${controleDeFluxo}`
        )
        console.log(`ultima porta: ${ultimaPorta} | nova porta: ${novaPorta}`)
        if (c === 3) {
            console.log(`PORTAS: ${c}\nSTATUS: ABERTA!`)
            return
        }
        if (c < 3) {
            console.log(`PORTAS: ${c}\nSTATUS:FECHADA\nTENTE NOVAMENTE`)
        }

        ultimaPorta = novaPorta
        controleDeFluxo++
    }
}

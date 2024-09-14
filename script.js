
const playHuman = (escolha) => {
 //   console.log(escolha)
    playTheGame(escolha, vezDaMaquina())
}

const vezDaMaquina = () => {
    const jogadas = ['pedra', 'papel', 'tesoura']
      const numeroRedondo = Math.floor(Math.random()*3)

    return jogadas[numeroRedondo]
}

const playTheGame = (humano, maquina) =>{
    console.log('humano: ' + humano + ' maquina:' + maquina)
}
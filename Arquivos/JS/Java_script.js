var largura = 0
var altura = 0
var vidas = 3
var tempo = 10
var dificuldade = 0
    

function iniciarjogo() {


    if (nivel === '') {
        alert('selecione um nivel para iniciar o jogo')
        return false
    }
    switch (document.getElementById('nivel').value) {
        case "galinha":
            dificuldade = 3000
            window.location.href="jogo.html?"+dificuldade
            break;
        case "Normal":
            dificuldade = 2000
            window.location.href="jogo.html?"+dificuldade
            break;
        case "Chuck":
            dificuldade = 900
            window.location.href="jogo.html?"+dificuldade
            break;
        case "brabo":
            dificuldade = 300
            window.location.href="jogo.html?"+dificuldade
            break;
        default:
            break;
    }

}

var ajustatempo = setInterval(function () {
        if (tempo < 0) {
                clearInterval(ajustatempo)
                clearInterval(fimsetInterval)
                window.location.href = "vitoria.html"
        }
        document.getElementById('cronometro').innerHTML = tempo
        tempo--
}, 1000)

function ajustaTamanhoPalco() {
        largura = window.innerWidth
        altura = window.innerHeight

}
ajustaTamanhoPalco()


function posicaoRandomica() {


        if (document.getElementById('mosquito') != null) {

                if (vidas == 0) {
                        clearInterval(fimsetInterval)
              
                        window.location.href = "game_over.html"
                        return
                }
                //remove o elemento 'mosquito' para não ficar povoando a tela 
                document.getElementById('vida' + vidas).src = "../imagens/coracao_vazio.png"
                vidas--
                document.getElementById('mosquito').remove()


        }

        // precisei colocar dentro de uma função pois quando nós instanciamos o <script> dentro do <head> o <body> não foi criado ainda acabando dando um erro de null 

        var posicaoX = Math.floor((Math.random() * largura) - 90)
        var posicaoY = Math.floor((Math.random() * altura) - 90)

        //operador ternario para solucionar o problema da imagem sumir quando pegar tamanhos menores que 0

        posicaoX = posicaoX < 0 ? 0 : posicaoX
        posicaoY = posicaoY < 0 ? 0 : posicaoY

        console.log(posicaoX, posicaoY)

        //criar o elemento html

        var mosquito = document.createElement('img') // isso e a mesma coisa de fazer diretamente no <body> porem de forma programatica do javascript
        mosquito.src = "../imagens/mosca.png"
        mosquito.className = tamanhosRandoimicos() + ' ' + ladoRandomico() // para acessar a classe do elemento //o tamnho e o lado


        mosquito.style.left = posicaoX + 'px'
        mosquito.style.top = posicaoY + 'px'
        mosquito.style.position = 'absolute'
        document.body.appendChild(mosquito)

        //cria um id pra limpar os mosquitos
        mosquito.id = 'mosquito'

        mosquito.onclick = function () {
                mosquito.remove()

        }


}
// e chamada pela funcao posicaoRandomica()
function tamanhosRandoimicos() {
        var classe = Math.floor(Math.random() * 3)
        console.log(classe)

        switch (classe) {

                case 0:
                        return 'mosquito1'
                        break;

                case 1:
                        return 'mosquito2'
                        break;
                default:
                        return 'mosquito3'
                        break;
        }

}
// e chamada pela funcao posicaoRandomica()
function ladoRandomico() {
        var classe = Math.floor(Math.random() * 2)
        console.log(classe)

        switch (classe) {

                case 0:
                        return 'LadoA'
                        break;

                case 1:
                        return 'LadoB'
                        break;

        }

}
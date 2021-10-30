// PUXANDO O RESULTADO E O INPUT 
let resultado = document.querySelector('.resultado');
let inputChute = document.querySelector('.input-chute');

// ESQUEMA DE pontos
let pontosUsuarioMaxHTML = document.querySelector('.span-max-pontos');
let pontosUsuarioHTML = document.querySelector('.span-pontos');
let pontosUsuario = 0;
pontosUsuarioMaxHTML.innerHTML = pontosUsuario;
pontosUsuarioHTML.innerHTML = pontosUsuario;

// LOJA
let buttonLoja = document.querySelector('.label-hamburguer');
let inputSelect = document.querySelector('#input-loja');
let lojaText = document.querySelector('.loja-text');

// ESQUEMA DE moedas
let moedasUsuarioLojaHTML = document.querySelector('.span-moedas-loja');
let moedasUsuarioHTML = document.querySelector('.span-moedas');
let moedasUsuario = 0;
moedasUsuarioHTML.innerHTML = moedasUsuario;
moedasUsuarioLojaHTML.innerHTML = moedasUsuario;

// LOJA ITENS
let produto1 = document.querySelector('.produto1');

// ESQUEMA DE DICAS
let dica = document.querySelector('.dica');
let returnNumero = Number(document.querySelector('.return-numero').value);

// TENTATIVAS
let tentativasUsuarioHTML = document.querySelector('.span-tentativas');
let tentativasUsuario = 3;
tentativasUsuarioHTML.innerHTML = tentativasUsuario;

// FUNÇÃO TENTAR NOVAMENTE
function tryAgain() {
    // RESET
    resultado.innerHTML = '';
    inputChute.value = '';

    // NÚMERO SECRETO
    let numeroSecreto = parseInt(Math.random() * 16);
    returnNumero = numeroSecreto;

    // RESETANDO O BOTÃO
    let botãoChutarHTML = document.querySelector('.div-botão');
    botãoChutarHTML.innerHTML = '<input type="button" value="Chutar" class="botão-chutar">';
    let botãoChutar = document.querySelector('.botão-chutar');
    buttonLoja.style.pointerEvents = 'all';

    // FUNÇÃO VERIFICA O VALOR DO INPUT INSERIDO
    function checkInput() {
        let inputChute = document.querySelector('.input-chute').value;
        if (!inputChute || inputChute < 0 || inputChute > 15) {
            alert('verifique se inseriu um valor correto');
        }
        else {
            return checkGeral(inputChute);
        }
    }

    // CHECA TUDO DO INPUT (ACERTO, ERRO, ETC..)
    function checkGeral(inputChute) {
        // IF ACERTOU
        if (inputChute == numeroSecreto) {
            resultado.innerHTML = `<span class="acertou">Parabéns você acertou!!</span>`;
            inputChute = '';
            dica.innerHTML = '';

            // ACRESENTA TENTATIVAS A MAIS
            tentativasUsuario = tentativasUsuario += 2;
            tentativasUsuarioHTML.innerHTML = tentativasUsuario;

            buttonLoja.style.pointerEvents = 'none';

            // ACRESENTA pontos
            let pontosAleatorios = parseInt(Math.random() * 4);
            while (pontosAleatorios == 0) {
                pontosAleatorios = parseInt(Math.random() * 4);
            }
            pontosUsuario = pontosUsuario += pontosAleatorios;
            pontosUsuarioHTML.innerHTML = pontosUsuario;

            // ACRESENTA moedas
            let moedasAleatorias = parseInt(Math.random() * 3);
            while (moedasAleatorias == 0) {
                moedasAleatorias = parseInt(Math.random() * 3);
            }
            moedasUsuario = moedasUsuario += moedasAleatorias;
            moedasUsuarioLojaHTML.innerHTML = moedasUsuario;
            moedasUsuarioHTML.innerHTML = moedasUsuario;

            // MUDA O BOTÃO TENTAR NOVAMENTE
            botãoChutarHTML.innerHTML = '<input type="button" value="Reiniciar" class="reiniciar">';
            document.querySelector('.reiniciar').addEventListener('click', tryAgain);
        }
        else if (inputChute < numeroSecreto) {
            resultado.innerHTML = `<span class="perdeu">Você errou!</span></br>O número secreto é maior &#8599`;
            // RETIRA 1 TENTATIVA
            tentativasUsuario = tentativasUsuario -= 1;
            tentativasUsuarioHTML.innerHTML = tentativasUsuario;
            if (tentativasUsuario == 0) {
                resultado.innerHTML = `<h4><span class="perdeu">Você Perdeu!!</span></br>O número verdadeiro era: <span class="span-secreto">${numeroSecreto}</span></h4>`;
                dica.innerHTML = '';
                buttonLoja.style.pointerEvents = 'none';
                // ZERA OS pontos
                if (pontosUsuarioHTML.innerHTML > pontosUsuarioMaxHTML.innerHTML) {
                    pontosUsuarioMaxHTML.innerHTML = pontosUsuario;
                }
                pontosUsuario = 0;
                pontosUsuarioHTML.innerHTML = pontosUsuario;

                // BOTÃO REINICIAR E DA 2 TENTATIVAS PARA O USUARIO TENTAR NOVAMENTE
                botãoChutarHTML.innerHTML = '<input type="button" value="Tentar Novamente" class="reiniciar">';
                document.querySelector('.reiniciar').addEventListener('click', tryAgain);
                document.querySelector('.reiniciar').addEventListener('click', giftTentativas);
            }

        }
        else if (inputChute > numeroSecreto) {
            resultado.innerHTML = `<span class="perdeu">Você errou!</span></br>O número secreto é menor &#8600`;
            // RETIRA 1 TENTATIVA
            tentativasUsuario = tentativasUsuario -= 1;
            tentativasUsuarioHTML.innerHTML = tentativasUsuario;

            if (tentativasUsuario == 0) {
                resultado.innerHTML = `<h4><span class="perdeu">Você Perdeu!!</span></br>O número verdadeiro era: <span class="span-secreto">${numeroSecreto}</span></h4>`;
                dica.innerHTML = '';
                buttonLoja.style.pointerEvents = 'none';

                if (pontosUsuarioHTML.innerHTML > pontosUsuarioMaxHTML.innerHTML) {
                    pontosUsuarioMaxHTML.innerHTML = pontosUsuario;
                }

                // ZERA OS pontos
                pontosUsuario = 0;
                pontosUsuarioHTML.innerHTML = pontosUsuario;

                // BOTÃO REINICIAR E DA 2 TENTATIVAS PARA O USUARIO TENTAR NOVAMENTE
                botãoChutarHTML.innerHTML = '<input type="button" value="Tentar Novamente" class="reiniciar">';
                document.querySelector('.reiniciar').addEventListener('click', tryAgain);
                document.querySelector('.reiniciar').addEventListener('click', giftTentativas);
            }

        }
    }

    // ADCIONA TENTATIVAS
    function giftTentativas() {
        tentativasUsuario = 3;
        tentativasUsuarioHTML.innerHTML = tentativasUsuario;
    }

    /* inputChute.addEventListener('keyup', function (e) {
        switch (e.key) {
            case 'Enter':
                botãoChutar.click();
                break;
        }
    }); */

    botãoChutar.addEventListener('click', checkInput);
}
tryAgain();

// FUNÇÃO COMPRAR PRODUTO
function comprarProduto1() {
    let guardaNumeroSecreto = returnNumero;
    console.log(returnNumero);
    if (moedasUsuario >= 10) {
        let numeroAleatorio = parseInt(Math.random() * 4);
        while (numeroAleatorio == 0) {
            numeroAleatorio = parseInt(Math.random() * 4);
        }
        let dicas = [
            `O número secreto tá entre ${guardaNumeroSecreto - numeroAleatorio} e ${guardaNumeroSecreto + numeroAleatorio}`,
            `O numero secreto multiplicado por ele mesmo da ${guardaNumeroSecreto * guardaNumeroSecreto}`,
            `a metade do numero secreto é ${guardaNumeroSecreto / 2}`,
            `O numero secreto elevado a 2 é ${guardaNumeroSecreto ** 2}`,
        ];
        let sortearDicas = parseInt(Math.random() * dicas.length)
        dica.innerHTML = dicas[sortearDicas];
        moedasUsuario = moedasUsuario -= 10;
        moedasUsuarioHTML.innerHTML = moedasUsuario;
        moedasUsuarioLojaHTML.innerHTML = moedasUsuario;
    }
    else {
        alert('Moedas insuficientes');
    }
}

// FUNÇÃO LOJA 
function funLojaButtonIcon() {
    if (inputSelect.checked == false) {
        lojaText.innerHTML = '<ion-icon class="icon-button-close" name="close-circle-outline"></ion-icon>';
    } else if (inputSelect.checked == true) {
        lojaText.innerHTML = `<ion-icon class="icon-button-cash" name = "logo-bitcoin" ></ion-icon > `;
    }
}
function funLojaButtonIcon2() {
    lojaText.innerHTML = `<ion-icon class="icon-button-cash" name = "logo-bitcoin" ></ion-icon > `;
}




produto1.addEventListener('click', funLojaButtonIcon2);
buttonLoja.addEventListener('click', funLojaButtonIcon);
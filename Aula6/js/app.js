var pontuacao = [0, 0];
var pontuacaoRodada = 0;
var jogadorAtual = 0;

//Math.random() = [0,1)
//Math.radom() * 6 = [0,6)

var botaoLancarDado = document.querySelector("#botao-lancar-dado");
var botaoPassarVez = document.querySelector("#botao-passar-vez");
var botaoNovoJogo = document.querySelector("#botao-novo-jogo");

var pontuacaoRodada0 = document.querySelector("#pontuacao-rodada-0");
var pontuacaoRodada1 = document.querySelector("#pontuacao-rodada-1");
var pontuacaoGlobal0 = document.querySelector("#pontuacao-global-0");
var pontuacaoGlobal1 = document.querySelector("#pontuacao-global-1");

var pontuacaoRodadas = [pontuacaoRodada0, pontuacaoRodada1];
var pontuacaoGlobais = [pontuacaoGlobal0, pontuacaoGlobal1];

botaoLancarDado.addEventListener("click", function () {
  var dado = Math.floor(Math.random() * 6 + 1);
  if (dado == 1) {
    pontuacao[jogadorAtual] = 0;
    pontuacaoRodadas[jogadorAtual].textContent = pontuacao[jogadorAtual];
    pontuacaoGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
    jogadorAtual = 1 - jogadorAtual;
  } else {
    pontuacao[jogadorAtual] += dado;
    pontuacaoGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
    pontuacaoRodadas[jogadorAtual].textContent = dado;
    if (pontuacaoGlobais[jogadorAtual].textContent >= 50) {
      alert(
        "O Jogo Acabou !!! \nO jogador atual é o vencedor !!! \n \n \n Clique em Novo Jogo."
      );
    }
  }
});

botaoPassarVez.addEventListener("click", function () {
  jogadorAtual = 1 - jogadorAtual;
});

botaoNovoJogo.addEventListener("click", function () {
  pontuacaoGlobal0.textContent = 0;
  pontuacaoGlobal1.textContent = 0;
  pontuacaoRodada0.textContent = 0;
  pontuacaoRodada1.textContent = 0;
});

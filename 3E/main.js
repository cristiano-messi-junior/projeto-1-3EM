const botoes = document.querySelectorAll(".botao");

fort(let i=0;1 <botoes.lenght;i++){
  botoes[i].onclick = function(){

    for(let j=0;j<botoes.lenght;j++){
      botoes[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
  }
}

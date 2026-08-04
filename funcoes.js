function EscolherTarefaInicial(){
//  var tarefaInicialText = "Cliente escolheu opção ";
  var tarefaInicial = document.getElementById("tarefaInicial");
  tarefaInicial = Number(tarefaInicial.value);
alert("Cliente escolheu opção " + tarefaInicial);
//seguirOutroPen(tarefaInicial);
}

function seguirOutroPen(tarefaInicial){
alert(tarefaInicial);
//tarefaInicial.link("https://codepen.io/hrpsouza/pen/MWGwjKN");
  if (tarefaInicial == 0){
window.location = "https://codepen.io/hrpsouza/pen/yLqNwrp";
    }
}
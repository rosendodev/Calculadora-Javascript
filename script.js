function calculadora() {
  const operacao = Number(prompt('Escolha a operação:\n 1- Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**) '));

  let n1 =  Number(prompt('Insira o primeiro valor'));
  let n2 = Number(prompt('Insira o segundo valor'));
  let resultado;

  function soma (){
    resultado = n1+ n2 
    alert (`${n1} + ${n2} =${resultado}`);
     novaoperacao ();
  }
 function subtracao (){
    resultado = n1 - n2 
    alert (`${n1} - ${n2} =${resultado}`);
    novaoperacao ();
  }
  function multiplicacao (){
    resultado = n1 * n2 
    alert (`${n1} * ${n2} =${resultado}`);
    novaoperacao ();
  }
    function divisao (){
    resultado = n1 / n2 
    alert (`${n1} / ${n2} =${resultado}`);
      novaoperacao ();
  }
   function novaoperacao (){
    let opcao = prompt('Deseja fazer uma nova operação ?\n 1 - Sim \n 2 -  Não')
     if(opcao ==1){
       calculadora();
     }else if  (opcao==2){
       alert('Até Mais !');
  }   
   }
if (operacao ==1){
  soma();
  }else if (operacao ==2){
  subtracao(); 
}else if (operacao ==3){
  multiplicacao();
}else if (operacao ==4){
  divisao();
}
}
calculadora();


const aplausos= document.querySelector("#som_tecla_aplausos")
function tocaSom(som){
    alert('clap clap clap')
}
let controle="tocar";
if(controle=="tocar"){
    alert('Áudio pronto para tocar')
}else{alert('O áudio não esta pronto')}
const buttons=document.querySelectorAll('button')
let contador=0
while(contador<buttons.length){
    buttons[contador].textContent=contador;
    contador=contador+1;
}
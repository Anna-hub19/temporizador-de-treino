const botao = document.querySelector('.botao')
const timer = document.querySelector('.timer')
const kcal = document.querySelector('.kcal')

let tempoDecorridoEmSegundos = 1800
let intervaloId = null 
let contagemDeCaloria = 0


const contagemRegressiva = () => {
       if(tempoDecorridoEmSegundos <= 0){
           alert('Tempo finalizado!')
           zerar()
           return
       }
       tempoDecorridoEmSegundos -= 1
       mostrarTempo()
       if (tempoDecorridoEmSegundos % 60 === 0) {
              aumentarCalorias();
            }

   }



function iniciarOuPausar() {
       if(intervaloId){
           zerar()
           return
       }
       intervaloId = setInterval(contagemRegressiva, 1000)
       botao.textContent = "Pausar"
       
   

   }
   
   function aumentarCalorias() {
       contagemDeCaloria += 5
       kcal.innerHTML = `${contagemDeCaloria} kcal`
     }
   
   botao.addEventListener('click', iniciarOuPausar, aumentarCalorias)
       
       
   
   function zerar() {
       clearInterval(intervaloId) 
       botao.textContent = "Começar"
       intervaloId = null
   }
   
   function mostrarTempo() {
       const tempo = new Date(tempoDecorridoEmSegundos * 1000)
       const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
       timer.innerHTML = `${tempoFormatado}`
   }
   
   mostrarTempo()
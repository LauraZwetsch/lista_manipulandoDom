// ATIVIDADE 1
// let quadrado1 = document.getElementById('primeira')
// let quadrado2 = document.getElementById('segunda')
// let quadrado3 = document.getElementById('terceira')

// quadrado1.addEventListener("click", function() {
//     if (quadrado1.style.backgroundColor === "purple") {
//         quadrado1.style.backgroundColor = "orange"
//     } else {
//         quadrado1.style.backgroundColor = "purple"
//     }
// });

// quadrado2.addEventListener("click", function() {
//     if (quadrado2.style.backgroundColor === "red") {
//         quadrado2.style.backgroundColor = "blue"
//     } else {
//         quadrado2.style.backgroundColor = "red"
//     }
// })

// quadrado3.addEventListener("click", function() {
//     if (quadrado3.style.backgroundColor === "pink") {
//         quadrado3.style.backgroundColor = "grey"
//     } else {
//         quadrado3.style.backgroundColor = "pink"
//     }
// })


// ATIVIDADE 2
// let botao = document.getElementById('botao')
// let resetar = document.getElementById('botao2')
// let mensagem = document.getElementById('mensagem') 
// let i = 1

// botao.addEventListener("click", function(){
//     mensagem.innerText = `Você clicou ${i++} vezes no botão`
// })

// resetar.addEventListener("click", function(){
//     i = 1
//     mensagem.innerText = `Você clicou 0 vezes no botão`
// })


// ATIVIDADE 3
// let mostrar = document.getElementById('mostrar')
// let ocultar = document.getElementById('ocultar')
// let mensagem = document.getElementById('mensagem')

// mensagem.style.visibility = "hidden"

// mostrar.addEventListener("click", function(){
//     mensagem.style.visibility = 'visible'
// })

// ocultar.addEventListener("click", function(){
//     mensagem.style.visibility = 'hidden'
// })


// ATIVIDADE 4
// let mensagem = document.getElementById('mensagem')
// let botao = document.getElementById('botao')

// botao.addEventListener('click', function(){
//     let texto = prompt('Escreva um novo texto para ser exibido')
//     mensagem.innerText = texto
// })


// ATIVIDADE 5
// document.addEventListener('keydown', function(event) { 
//     let mensagem = document.getElementById('mensagem')
//     mensagem.innerText = "Você apertou a tecla " +event.key
// })


// ATIVIDADE 6
// let voto = document.getElementById('voto')
// let lula = document.getElementById('lula')
// let mensagem = document.getElementById('mensagem')

// lula.style.display = "none"
// bolsonaro.style.display = "none"
// mensagem.style.display = "none"

// voto.addEventListener('click', function(){
//     let texto = prompt("Qual seu voto? (13 - Lula, 22 - Bolsonaro)")
//     if (texto == 13){
//         lula.style.display = "block"
//         mensagem.innerText = "Luiz Inácio Lula da Silva"
//         mensagem.style.display = "block"
//         let confirma = prompt("Confirmar seu voto?").toLowerCase()
//             if(confirma == "sim"){
//                 alert("Você votou no Lula!")
//             }
//             else{
//                 alert("Vote novamente.")
//                 lula.style.display = "none"
//                 mensagem.style.display = "none"
//             }

//     }
//     else if(texto == 22){
//         mensagem.innerText = "Jair Messias Bolsonaro"
//         lula.style.display = "none"
//         bolsonaro.style.display = "block"
//         let confirma = prompt("Confirmar seu voto?").toLowerCase()
//         if(confirma == "sim"){
//             alert("Você votou no Bolsonaro!")
//         }
//         else{
//             alert("Vote novamente.")
//             bolsonaro.style.display = "none"
//             mensagem.style.display = "none"
//         }
//     }
//     else{
//         alert("Voto nulo")
//         mensagem.style.display = "none"
//         lula.style.display = "none"
//         bolsonaro.style.display = "none"
//         mensagem.style.display = "none"

//     }
// })

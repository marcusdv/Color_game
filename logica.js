var quadrados = document.querySelectorAll(".quadrado")
var spanRGB = document.querySelector("#cor-escolhida")
var botoes = document.querySelectorAll(".botoes")
var container = document.getElementById("container")
var pontuacaoh1 = document.getElementById("pontuacaoH1")
var quadradoNoDificil = document.getElementById("quadrados-no-dificil")
var nav = document.getElementById("nav")
var facePalm = document.querySelectorAll(".face-palm")
var quadradoNoOohShit = document.getElementById("quadrados-no-oohshit")
var ArrayDeCores = []
var indexDaCorCorreta
var corAleatoriaParaQuadrados
var rgbCorCorreta
var numeroDeQuadradosEmArrays = 2
var dificuldadeDoJogo = "facil"
var pontuacao = 0 

gerarDificuldade()
// Gera cores aleatórias para o Array cores[]
gerarCoresAleatorias()

//Verifica se acertou, se sim pontua se não despontua
for(var x = 0; x < quadrados.length; x++) {
    quadrados[x].addEventListener("click", function(){
      if(this.style.backgroundColor === rgbCorCorreta){
        pontuar()      
        gerarCoresAleatorias()
      } else if(this.style.backgroundColor !== rgbCorCorreta){
        despontuar()
        this.style.backgroundColor = "#232323"
        pontuacaoH1.textContent = pontuacao
      }
    })
}

function geradorDeTonalidadeAleatoria() {
    var numero = Math.round(Math.random() * 255);
    return numero
}

function gerarCoresAleatorias() {      
    for(var x = 0; x <= numeroDeQuadradosEmArrays; x++) {
        //Cria m RGB alepatorio pra cada quadrado
        corAleatoriaParaQuadrados = "rgb(" + geradorDeTonalidadeAleatoria() + ", " + geradorDeTonalidadeAleatoria() + ", " + geradorDeTonalidadeAleatoria() + ")"
        ArrayDeCores[x] = corAleatoriaParaQuadrados
        quadrados[x].style.backgroundColor = ArrayDeCores[x]
    }
    //Gera a alternativa correta
    indexDaCorCorreta = Math.round(Math.random() * numeroDeQuadradosEmArrays);
    rgbCorCorreta = ArrayDeCores[indexDaCorCorreta]
    //Coloca o rgb correto no cabeçalho
    spanRGB.textContent = ArrayDeCores[indexDaCorCorreta]
    nav.style.backgroundColor = ArrayDeCores[indexDaCorCorreta]
    pontuacaoH1.textContent = pontuacao
}

function gerarDificuldade() {
    for(var x = 0; x < botoes.length; x++) {
        botoes[x].addEventListener("click", function() {
            if(this.textContent === "Fácil") {
                numeroDeQuadradosEmArrays = 2
                dificuldadeDoJogo = "facil"
                quadradoNoDificil.classList.add("invisivel")
                quadradoNoOohShit.classList.add("invisivel")

            } else if (this.textContent === "Difícil") {
                numeroDeQuadradosEmArrays = 5
                dificuldadeDoJogo = "dificil"
                quadradoNoDificil.classList.remove("invisivel")
                quadradoNoOohShit.classList.add("invisivel")
            } else if(this.textContent === "OOHSHIT") {
                numeroDeQuadradosEmArrays = 8
                dificuldadeDoJogo = "oohshit"
                quadradoNoDificil.classList.remove("invisivel")
                quadradoNoOohShit.classList.remove("invisivel")
            }
            pontuacao = 0
            gerarCoresAleatorias()

        })
    }
}

function pontuar(){
    if(dificuldadeDoJogo === "facil")
        pontuacao += 1
    else if (dificuldadeDoJogo === "dificil")
        pontuacao += 3
    else if (dificuldadeDoJogo === "oohshit")
        pontuacao += 5  
    toggleFacepalm() 
}

function despontuar(){
    if (dificuldadeDoJogo === "facil")
        pontuacao -= 1
    else if (dificuldadeDoJogo === "dificil")
        pontuacao -= 1
    else if (dificuldadeDoJogo === "oohshit")
        pontuacao -= 2  
    toggleFacepalm()  
}

function toggleFacepalm() {
    if (pontuacao < 0) {
        for(var x = 0; x < facePalm.length; x++){
            facePalm[x].classList.remove("invisivel")
        }
    } if (pontuacao >= 0) {
        for(var x = 0; x < facePalm.length; x++){
            facePalm[x].classList.add("invisivel")
        }
    } 
}
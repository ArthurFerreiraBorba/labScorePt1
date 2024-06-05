function calcularMedia(notas) {

    let media = 0

    for (i = 0; i < notas.length; i++){
        media += notas[i]
    }

    return media / notas.length
}

function passou(media) {
    media > 7 ? document.write("Parabéns você passou na média !") : document.write("Infelizmente você está de recuperação.")
}

function imprimirAlunos(alunos) {
    alunos.forEach(element => {
        document.write("<p>" + element + "<p>")
    });
}

function tabuada(numero) {
    for (i = 1; i <= 10; i++) {
        console.log(numero + " X " + i + " = " + numero*i)
    }
}

function obterDadosAluno() {
    let nome = window.prompt("Qual o nome do aluno?")
    let idade = window.prompt("Qual a idade do aluno?")
    let serie = window.prompt("Qual a série do aluno?")
    let escola = window.prompt("Qual o nome da escola?")
    let materia = window.prompt("Qual a sua matéria favorita?")

    let confirmação = window.confirm("Vocé confirma os dados informados?")

    if (confirmação) {
        document.write("<p>" +nome+ "<p>")
        document.write("<p>" +idade+ "<p>")
        document.write("<p>" +serie+ "<p>")
        document.write("<p>" +escola+ "<p>")
        document.write("<p>" +materia+ "<p>")
    } else {
        window.alert("Os dados não foram confirmados")
    }
}

function criarMateria() {



    let nota

    materia.nome = window.prompt("Digito o nome da matéria")
    for (i = 1; i <= 4; i++) {
        nota = window.prompt(`Digite a ${i}ª nota`)
        materia.notas.push(parseInt(nota))
    }

    materia.media = calcularMedia(materia.notas)

    return materia
}

function filtrarMaiorNumero(numeros) {

    let resultado = numeros.reduce((maior, numero) => {
        return numero > maior ? numero : maior
    }, 0)

    return resultado
}

    let materia = {
        nome: "",
        notas: [],
        media: 0
    }

let alunos = ["arthur", "felipe", "pedro"]

let notas = [5, 4, 8, 5]

let media = calcularMedia(notas)

let matematica = criarMateria()

console.log(media)
console.log(matematica)
passou(media)
imprimirAlunos(alunos)
tabuada(8)

console.log(filtrarMaiorNumero(matematica.notas))
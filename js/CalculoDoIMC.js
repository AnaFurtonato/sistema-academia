
    // pega valor do cliente da tabela

    //var paciente = document.querySelector("#primeiro-paciente");

    var alunos = document.querySelectorAll(".aluno");

for (var i = 0; i < alunos.length; i++) {

    var aluno = alunos[i];

    var tdPeso = aluno.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = aluno.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = aluno.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        aluno.classList.add("aluno-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        aluno.classList.add("aluno-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}


function validaPeso(peso){
    if (peso >= 0 && peso <=300){
        return true;
    }else {
        return false;
    }
}


function validaAltura(altura){
    if (altura >= 0 && altura <=3.0){
        return true;
    }else {
        return false;
    }
}



function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

var botaoAdicionar = document.querySelector("#adicionar-aluno");
botaoAdicionar.addEventListener("click", function(event){
 event.preventDefault();


    var form = document.querySelector("#form-adiciona");

    function exibeMensagensDeErro(erros) {
        var ul = document.querySelector("#mensagens-erro");

        ul.innerHTML = "";

        erros.forEach(function(erro) {
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
    }

       
    var aluno = obtemalunoDoFormulario(form);
    var alunoTr = montaTr(aluno);

    var erros = validaaluno(aluno);
    console.log(erros);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    } 


    if (!validaaluno(aluno)) {
        console.log("Aluno inválido");
            return;
    }
    
    var tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
    
});
    


function obtemalunoDoFormulario(form) {

    var aluno = {
        nome: form.nome.value,
        atividade: form.atividade.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return aluno;
}

function validaaluno(aluno){
    if(aluno.altura < 3.0 && aluno.altura >= 0){
        return true;
    }
}
 
    var tdImc = aluno.querySelector(".info-imc");
    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("aluno-invalido");
    }

    if(altura <= 0 || altura >= 3.00){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        aluno.classList.add("aluno-invalido");
    }

    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }


    function validaaluno(aluno) {
        var erros = [];

        if (aluno.nome.length == 0){
             erros.push("O nome não pode ser em branco");
        }

        if (aluno.gordura.length == 0){
            erros.push("A gordura não pode ser em branco");
        }

        if (aluno.peso.length == 0){
            erros.push("O peso não pode ser em branco");
        }

        if (aluno.altura.length == 0){
            erros.push("A altura não pode ser em branco");
        }

        if (!validaPeso(aluno.peso)){
            erros.push("Peso é inválido");
        }

        if (!validaAltura(aluno.altura)){
            erros.push("Altura é inválida");
        }

        return erros;
    }
       


function montaTr(aluno) {
    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");

    alunoTr.appendChild(montaTd(aluno.nome, "info-nome"));
    alunoTr.appendChild(montaTd(aluno.atividade, "info-atividade"));
    alunoTr.appendChild(montaTd(aluno.peso, "info-peso"));
    alunoTr.appendChild(montaTd(aluno.altura, "info-altura"));
    alunoTr.appendChild(montaTd(aluno.gordura, "info-gordura"));
    alunoTr.appendChild(montaTd(aluno.imc, "info-imc"));

    return alunoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}



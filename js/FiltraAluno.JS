var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);

    var alunos = document.querySelectorAll(".aluno");

    if (this.value.length > 0) {
        for (var i = 0; i < alunos.length; i++) {

            var aluno = alunos[i];
            var tdNome = aluno.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                aluno.classList.add("invisivel");
            } else {
                aluno.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < alunos.length; i++) {
            var aluno = alunos[i];
            aluno.classList.remove("invisivel");
        }
    }
});






/*var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");

    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;

        if (nome != this.value) {
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel");
        }
    }
});*/
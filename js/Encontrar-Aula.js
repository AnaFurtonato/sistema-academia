var campoFiltro2 = document.querySelector("#filtrar-tabela2");

campoFiltro2.addEventListener("input", function(){
    console.log(this.value);

    var aulas = document.querySelectorAll(".aula");

    if (this.value.length > 0) {
        for (var i = 0; i < aulas.length; i++) {

            var aula = aulas[i];
            var tdaula = aula.querySelector(".info-atividade2");
            var aulanome = tdaula.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(aulanome)) {
                aula.classList.add("invisivel");
            } else {
                aula.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < aulas.length; i++) {
            var aula = aulas[i];
            aula.classList.remove("invisivel");
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
var alunos = document.querySelectorAll(".aluno");

var tabela = document.querySelector("table");

tabela.addEventListener('dblclick', function(event) {
    event.target.parentNode.classList.add("fadeOut");
    event.target.parentNode.remove();
   
});

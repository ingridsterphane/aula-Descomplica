
// criando um objeto de conexão com o banco de dados
function getValue() {
    var value = document.getElementById("name").value;
    document.getElementById("result").innerHTML ="Bem vindo, " + value + "!";
}

// função para limpar o campo de texto
function clearValue() {
    document.getElementById("name").value = "";
    document.getElementById("result").innerHTML = "";
}
function validar(){
    var nome, email, assunto;

    nome = document.getElementById("nome").value;
    email = document.getElementById("email").value;
    assunto = document.getElementById("assunto").value;

    if(nome == "" || email == "" || assunto == ""){
        alert("Preencha o campo nome.");
        return false;
    }
}
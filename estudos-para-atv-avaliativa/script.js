var nomeGlobal;
var mensagemGlobal;

function conferirMensagemWhatsApp(){
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
   
    nomeGlobal = nome;
    mensagemGlobal = mensagem;

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;
}

function enviar(){
    var numeroTelefone = "5541999999999"

    var linkWhatsApp = 
    "https://wa.me/" + 
    numeroTelefone + 
    "?text=Nome:" + 
    nomeGlobal + 
    " - " + 
    mensagemGlobal;

    window.open(linkWhatsApp, "_blank")
   
}
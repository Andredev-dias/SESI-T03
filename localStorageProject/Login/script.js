var cont = 0;

const showPassword = () => {
    var inputSenha = document.querySelector("#senha");
    // if(!((cont++)%2)) {inputSenha.setAttribute("type", "text")}
    // else {inputSenha.setAttribute("type", "password");}
    if(inputSenha.getAttribute("type") === "password"){
        inputSenha.setAttribute("type", "text")
    }else{
        inputSenha.setAttribute("type", "password")
    }
}

function formatarData(item){
    var options = {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }

    return item.toLocaleString("pt-BR", options)
}

function login(){
    var nome = $("#nome").val();
    var senha = $("#senha").val();

    if(nome && senha && nome === "admin" && senha === "12345"){
        const user = {
            name: nome,
            dataEntrada: formatarData(new Date()),
            id: Math.floor(Math.random() * 100000),
        }
        localStorage.setItem("usuario", JSON.stringify(user))
        window.location.href = "../Loja"
    }else{
        document.getElementById("error-modal").style.display = "flex";
    }
}

const fecharError = () =>   document.getElementById("error-modal").style.display = "none";
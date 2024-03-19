let produtos;

window.onload = function () {
    var storedUser = localStorage.getItem("usuario")
    var user = JSON.parse(storedUser)

    document.getElementById("user").textContent = user.name;
    document.getElementById("perfil").textContent = user.name;
    document.getElementById("idPerfil").textContent = user.id;
    document.getElementById("novaData").textContent = user.dataEntrada;
}


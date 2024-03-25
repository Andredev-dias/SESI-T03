$(document).ready(function (){
    //recupera o carrinho do localstorage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    //acumular em 2 variaveis a lista e o total
    const listaElement = $('#lista');
    const totalElement = $('#total');

    function exibirCarrinho(){
        listaElement.empty();
        let totalPreco = 0;

        $.each(carrinho, function (index, item){
            const listItem = $('<li>').text(`${item.descricao} Preço: R$${item.preco}`);

            const removeButton = $('<button>').text("❌").css("margin-left", "10px").click(function  () {
                removerItemDoCarrino(index);
            })
            listItem.append(removeButton)

            listaElement.append(listItem)

            totalPreco += item.preco
        });

        totalElement.text(`Total: R$${totalPreco.toFixed(2)}`)
    }
    function removerItemDoCarrino(index){
        carrinho.splice(index,1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
        exibirCarrinho()
    }

    exibirCarrinho();
});

function gerarDocumentoWord(){
    const listaElement = document.getElementById("lista");
    const totalElement = document.getElementById("total");

    //clona a lista para evitar a modificação na lista original.
    const listaClone = listaElement.cloneNode(true);

    //remove o botao de deletar da lista antes de printa-lo no word
    $(listaClone).find("button").remove();

    const listaHtml = listaClone.innerHTML;
    const totalHtml = totalElement.innerHTML;

    const conteudoHtml = `
        <html>
            <head>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <h1>PEDIDO CONFIRMADO</h1>
                <h3>Agradecemos sua preferência</h3>
                ${listaHtml}
                <br>
                <br>
                ${totalHtml}
            </body>
        </html>
    `;

    const blob = new Blob([conteudoHtml], {type: "application/msword"});
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "carrinho.doc";
    link.click();
    document.getElementById("pedido").style.display = "block";
}



const successClose = () => document.getElementById("pedido").style.display = "none"




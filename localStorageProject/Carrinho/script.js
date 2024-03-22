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


const successClose = () => document.getElementById("pedido").style.display = "none"




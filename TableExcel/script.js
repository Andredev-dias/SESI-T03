function adicionarItem(){
    //obter os valores de entrada
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value; 
    var quantidade = document.getElementById("quantidade").value; 

    //validar se os campos estão preenchidos
    if(!nome || !valor || !quantidade){
        alert("Preencha todos os campos")
        return;
    }

    //criar e atribuir as celulas os valores digitados
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    //criando uma linha na tabela
    var novaLinha = tabela.insertRow(tabela.rows.length);
    //criando celulas dentro da linha
    var celulaNome = novaLinha.insertCell(0);
    var celulaValor = novaLinha.insertCell(1);
    var celulaQuantidade = novaLinha.insertCell(2);
    //inserindo o valor dos inputs nas celulas
    celulaNome.innerHTML = nome;
    celulaValor.innerHTML = valor;
    celulaQuantidade.innerHTML = quantidade;
}

function exportarParaExcel(){
    var tabela = document.getElementById("tabela");
    var nomeArquivo = "tabela_produtos.xlsx";
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Tabela de Produtos"});
    XLSX.writeFile(wb, nomeArquivo)
}
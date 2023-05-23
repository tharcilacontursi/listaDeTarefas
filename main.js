let linha = '';

$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        const inputNomeDaTarefa = $('#nome-tarefa').val();
        const addNaLista = $('#lista-tarefa');
        let itemNovo = $(inputNomeDaTarefa).appendTo(addNaLista);

        console.log(itemNovo);

})
}
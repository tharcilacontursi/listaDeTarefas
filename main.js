
$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const inputNomeDaTarefa = $('#nome-tarefa').val();
        const addNaLista = $('#lista-tarefa');
        
        $('<li>').text(inputNomeDaTarefa).appendTo(addNaLista)('</li>');
    })
    
    $('li').click(function (){
       $(this).addClass('item-completado');
    })

})

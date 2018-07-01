$(function(){
	const table = $("#pixelCanvas");

    function makeGrid(height, width){
        let table = $('#pixelCanvas');
        table.children().remove();
         
        for ( let x = 1; x <= height; x++){

            let tr = $('<tr></tr>');
            table.append(tr);

            for (let j = 1; j <= width; j++) {

                tr.append('<td></td>');
            } 
        }  
    }


	$('#pixelCanvas').on('click', 'td', function(evt){
		let selectedColor = $('#colorPicker').val();
        if (!$(this).attr("style")){
        	$( this ).css('background-color', selectedColor);
        } else {
        	$( this ).css("background-color", "");
        }
    });


    $('#sizePicker').on('submit', function(evt){
        evt.preventDefault();
        let height = $("#sizePicker")[0][0].value;
		let width = $("#sizePicker")[0][1].value;
        makeGrid(height, width);
    });

        
});
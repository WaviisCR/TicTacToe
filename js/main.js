$(document).ready(function() /*es para cargar primero el html*/ {
        var jugada = 0;
        /*seleccionas el elemento sobre el que vas a trabajar ->*/
        $(".box").click(function() {
                jugada++; /*contador, suma de 1 en 1*/
                /*Esta condicion es para las jugadas: para qu empiece en x, y las cajas se desactiven con un click*/
                if (jugada % 2 === 0) {
                    /*(this)el elemento sobre el estoy trabajando, en este caso .box / .html es lo que quiero cambiar / (O) por lo que cambiara*/
                    $(this).html("O")
                    $(this).css({
                        "background": "black",
                        "color": "silver"
                    }); /*el css va entre comillas y llaves*/
                    $(this).prop("disabled", true) /*deshabilitar el boton con .prop*/
                } else {
                    $(this).html("X")
                    $(this).css({
                        "background": "silver",
                        "color": "black"
                    });
                    $(this).prop("disabled", true)
                }
//Asignar el contenido de cada box a una variable para luego poer compararlos entre ellos y poder determninar a un ganador.*/
    
        var b0 = $("#0").text(); 
        var b1 = $("#1").text();
        var b2 = $("#2").text();
        var b3 = $("#3").text();
        var b4 = $("#4").text();
        var b5 = $("#5").text();
        var b6 = $("#6").text();
        var b7 = $("#7").text();
        var b8 = $("#8").text();

        //Definicion de ganador de la fila 1
        if(b0 === "X" && b1 === "X" && b2 === "X") {
            alert('gano X');

        }

        if(b0 === "O" && b1 === "O" && b2 === "O"){
            alert('gano O');
        }
        //Definicion de ganador de la fila 2
        if(b3 === "X" && b4 === "X" && b5 === "X") {
            alert('gano X');

        }

        if(b3 === "O" && b4 === "O" && b5 === "O"){
            alert('gano O');
        }
        //Definicion de ganador de la fila 3
        if(b6 === "X" && b7 === "X" && b8 === "X") {
            alert('gano X');

        }

        if(b6 === "O" && b7 === "O" && b8 === "O"){
            alert('gano O');
        }
        //Definicion de ganador de la columna 1
        if(b0 === "X" && b3 === "X" && b6 === "X") {
            alert('gano X');

        }

        if(b0 === "O" && b3 === "O" && b6 === "O"){
            alert('gano O');
        }
        //Definicion de ganador de la columna 2
        if(b1 === "X" && b4 === "X" && b7 === "X") {
            alert('gano X');

        }

        if(b1 === "O" && b4 === "O" && b7 === "O"){
            alert('gano O');
        }
        //Definicion de ganador de la columna 3
        if(b2 === "X" && b5 === "X" && b8 === "X") {
            alert('gano X');

        }

        if(b2 === "O" && b5 === "O" && b8 === "O"){
            alert('gano O');
        }
        //Definicion de ganador de la diagonal 1
        if(b0 === "X" && b4 === "X" && b8 === "X") {
            alert('gano X');

        }

        if(b0 === "O" && b4 === "O" && b8 === "O"){
            alert('gano O');
        }
        //Definicion de ganador de la diagonal 2
        if(b2 === "X" && b4 === "X" && b6 === "X") {
            alert('gano X');

        }

        if(b2 === "O" && b4 === "O" && b6 === "O"){
            alert('gano O');
        }
    //}
        
    });

});  //siempre termina

//funcion para recargar(boton)
$(document).ready(function() {
     $("#reload").click(function() {
          location.reload();/*recargo la pagina en el archivo en estoy*/
     });
});
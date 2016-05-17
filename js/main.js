$(document).ready(function() /*es para cargar primero el html*/ {
    var jugada = 0;
    var arreglo = [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"]
    ]
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
        /* var b0 = $("#0").text(); 
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

});  //siempre termina en ;*/

        /*COMPOSICION DE ARREGLO*/

            /*este es un arreglo de arreglitos*/

        /*ASIGNACION DE VALORES*/
        arreglo[0][0] = $("#0").text();
        arreglo[0][1] = $("#1").text();
        arreglo[0][2] = $("#2").text();

        arreglo[1][0] = $("#3").text();
        arreglo[1][1] = $("#4").text();
        arreglo[1][2] = $("#5").text();

        arreglo[2][0] = $("#6").text();
        arreglo[2][1] = $("#7").text();
        arreglo[2][2] = $("#8").text();

        /*CICLO FOR PARA ARREGLO: trabajar con indices*/
        for (var i = 0; i < 3; i++) {
            if (arreglo[i][0] == arreglo[i][1] && arreglo[i][1] == arreglo[i][2] && arreglo[i][0] != "*") {
                alert("Gano " + arreglo[i][0] + "!");
            }
        }

        for (var i = 0; i < 3; i++) {
            if (arreglo[0][i] == arreglo[1][i] && arreglo[1][i] == arreglo[2][i] && arreglo[0][i] != "*") {
                alert("Gano " + arreglo[0][i] + "!");
            }
        }
        if (arreglo[0][0] == arreglo[1][1] && arreglo[0][0] == arreglo[2][2] && arreglo[0][0] != "*") {
            alert("Gano " + arreglo[0][0] + "!");
        }
        if (arreglo[0][2] == arreglo[1][1] && arreglo[0][2] == arreglo[2][0] && arreglo[0][2] != "*") {
            alert("Gano " + arreglo[0][2] + "!");
        }
    });

}); //siempre termina en ;*/

//funcion para recargar(boton)
$(document).ready(function() {
    $("#reload").click(function() {
        location.reload(); /*recargo la pagina el archivo en el que estoy*/
    });
});
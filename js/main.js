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
/*Asignar el contenido de cada box a una variable para luego poer compararlos entre ellos y poder determninar a un ganador.*/
        var b1 = $(#1).text;/*.text para obtener el valor "# 1 "*/
        var b2 = $(#2).text;
        var b3 = $(#3).text;
        var b4 = $(#4).text;
        var b5 = $(#5).text;
        var b6 = $(#6).text;
        var b7 = $(#7).text;
        var b8 = $(#8).text;
        var b9 = $(#9).text;


    });
}); /*siempre termina

/*funcion para recargar(boton)*/
$(document).ready(function() {
     $("#reload").click(function() {
          location.reload();/*recargo la pagina en el archivo en estoy*/
     })
})
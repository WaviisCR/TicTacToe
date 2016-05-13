$(document).ready(function() /*es para cargar primero el html*/ {
    var jugada = 0;
    /*seleccionas el elemento sobre el que vas a trabajar ->*/$(".box").click(function(){
        jugada++;/*contador, suma de 1 en 1*/
        if (jugada % 2 === 0) {
            $(this)/*el elemento sobre el estoy trabajando, en este caso .box*/ .html/*lo que quiero cambiar*/("O")/*por lo que cambiara*/
            $(this).css({
                "background": "black",
                "color": "silver"
            }); /*el css va entre comillas y llaves*/
            $(this).prop("disabled", true)/*deshabilitar el boton con .prop*/
        } else {
            $(this).html("X")
            $(this).css({
                "background": "silver",
                "color": "black"
            });
            $(this).prop("disabled", true)
        }
    });
}); /*siempre terminan en ;*/
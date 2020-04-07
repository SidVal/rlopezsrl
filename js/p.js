function precios() {
    var saludo = "Hola Osvaldo";
    var sp = " ";
    var punto = ". ";
    var aparte = "\r\n\r\n";
    var waStr = saludo + sp + punto + aparte + "Quisiera la lista de precios de hoy si la tienes por favor" + punto;
    var mensaje = "https://wa.me/543512600009?text=" + encodeURIComponent(waStr);
    window.open(mensaje);
}

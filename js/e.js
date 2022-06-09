function envios() {
    var saludo = "Hola Osvaldo";
    var sp = " ";
    var punto = ". ";
    var aparte = "\r\n\r\n";
    var waStr = saludo + sp + punto + aparte + "Me interesan envíos a la calle y altura" + punto;
    var mensaje = "https://wa.me/543512600009?text=" + encodeURIComponent(waStr);
    window.open(mensaje);
}

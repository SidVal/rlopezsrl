function ventas() {
    var saludo = "Hola Osvaldo";
    var sp = " ";
    var punto = ". ";
    var aparte = "\r\n\r\n";
    var waStr = saludo + sp + punto + aparte + "Quiero pedirte la siguiente mercadería ..." + punto;
    var mensaje = "https://wa.me/543512600009?text=" + encodeURIComponent(waStr);
    window.open(mensaje);
}

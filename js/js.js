function validar() {
    var nom = document.getElementById('nombre');
    var neg = document.getElementById('negocio');    
    var conta = document.getElementById('contador');
    var v = document.getElementById("post");
      
    // control de nombre
    if (nom.value.length <= 0) { 
      nom.classList.add("invalid") 
      } else { nom.classList.remove("invalid") }

    // control de negocio
        if (neg.value.length <= 0) { 
      neg.classList.add("invalid") 
      } else { neg.classList.remove("invalid") }
    
    // control de contador
    if (conta.value.length <= 0) {
    conta.classList.add("invalid")
    } else { conta.classList.remove("invalid") }
    
    // finalmente habilito el botón si todo es válido
      if (nom.checkValidity() && neg.checkValidity() && conta.value.length > 5) { 
      v.classList.remove('disabled');
      } else { v.classList.add('disabled') }
}    

function ok() {
    var name = document.getElementById('nombre').value;
    var ok_nego = document.getElementById('negocio').value;
    var ok_conta = document.getElementById('contador').value;
    var sp = " ";
    var punto = ". "
    var aparte = "\r\n\r\n";
    var renglon = "\r\n"
    var waStr = "Hola Osvaldo, soy"+ sp + name + punto + aparte +"Tengo negocio del tipo" + sp + "'" + ok_nego + "'" + punto + aparte + ok_conta + punto;
    var mensaje = "https://wa.me/543512600009?text=" + encodeURIComponent(waStr);
    window.open(mensaje);
}

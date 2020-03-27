function validar() {
    var nom = document.getElementById('contactName');
    var neg = document.getElementById('negocio');
    var subj = document.getElementById('contactSubject');
    var conta = document.getElementById('contactMessage');
    var v = document.getElementById("post");
      
    // control de nombre
    if (nom.value.length <= 0) { 
      nom.classList.add("invalid") 
      } else { nom.classList.remove("invalid") }

    // control de negocio
        if (neg.value.length <= 0) { 
      neg.classList.add("invalid") 
      } else { neg.classList.remove("invalid") }
    
    // control de tema
    if (subj.value.length <= 0) {
    subj.classList.add("invalid")
    } else { subj.classList.remove("invalid") }
    
    // control de contador
    if (conta.value.length <= 0) {
    conta.classList.add("invalid")
    } else { conta.classList.remove("invalid") }
    
    // finalmente habilito el botón si todo es válido
      if (nom.checkValidity() && neg.checkValidity() && conta.value.length > 5 && subj.value.length > 3) { 
      v.classList.remove('disabled');
      } else { v.classList.add('disabled') }
}    

function ok() {
    var name = document.getElementById('contactName').value;
    var ok_nego = document.getElementById('negocio').value;
    var ok_conta = document.getElementById('contactMessage').value;
    var ok_tema = document.getElementById('contactSubject').value;
    var saludo = "Hola Osvaldo, soy";
    var sp = " ";
    var punto = ". ";
    var comi = "'";
    var aparte = "\r\n\r\n";
    var renglon = "\r\n";
    var waStr = saludo + sp + name + punto + aparte + "Tengo negocio del tipo" + sp + comi + ok_nego + comi + punto + aparte + "Te escribo por" + sp + comi + ok_tema + comi + punto + renglon + ok_conta + punto;
    var mensaje = "https://wa.me/543512600009?text=" + encodeURIComponent(waStr);
    window.open(mensaje);
}

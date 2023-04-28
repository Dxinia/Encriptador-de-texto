function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let Muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
     .replace(/e/gi,"enter")
     .replace(/i/gi,"imes")
     .replace(/a/gi,"ai")
     .replace(/o/gi,"ober")
     .replace(/u/gi,"ufat");

       if (texto.length != 0){  
       document.getElementById ("texto").value = textoCifrado;
       tituloMensaje.textContent="Texto encriptado con exito"; 
       parrafo.textContent = "Ingrese el texto que deseas encriptar o desencriptar"; 
       Muñeco.src = "./img/Muñeco.png";
       } else{
      Muñeco.src = "./img/Muñeco.png";
      tituloMensaje.textContent="Ningún mensaje fue encontrado";
      alert("Debes ingresar algun texto");
       }

}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco"); 

    textoCifrado = texto
    .replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ai/gi,"a")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u");

    if (texto.length != 0){
     document.getElementById ("texto").value = textoCifrado;
     tituloMensaje.textContent="Texto desencriptado con éxito"; 
     parrafo.textContent = "";
    }else{
        muñeco.src = "./img/Muñeco.png";
        tituloMensaje.textContent="Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algun texto");  
    }
}

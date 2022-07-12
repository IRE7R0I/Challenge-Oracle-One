var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopiar = document.querySelector("#btn-copiar")

document.getElementById("mensaje-encriptado").style.display = "none";
document.getElementById("sin-mensaje").style.display = "block";

//*************          FASE ENCRIPTADO         ****************//

btnEncriptar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-encriptar");
    var texto = form.encriptar.value;

    comprobarVacio(texto);

    var textoEncriptado = encriptarFrase(texto);

    var cajaEncriptado = document.querySelector("#texto-encriptado");
    cajaEncriptado.textContent = textoEncriptado;
    form.reset();
});

function encriptarFrase(texto){
    var textoEncriptado = texto;

    textoEncriptado = textoEncriptado.replace(/e/igm,'enter');
    textoEncriptado = textoEncriptado.replace(/o/igm,'ober');
    textoEncriptado = textoEncriptado.replace(/i/igm,'imes');
    textoEncriptado = textoEncriptado.replace(/a/igm,'ai');
    textoEncriptado = textoEncriptado.replace(/u/igm,'ufat');

    return textoEncriptado;
}


//****************       FASE DESENCRIPTADO         ****************//


btnDesencriptar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-encriptar");
    var texto = form.encriptar.value;

    comprobarVacio(texto);
    var textoDesencriptado = desencriptarFrase(texto);

    var cajaEncriptado = document.querySelector("#texto-encriptado");
    cajaEncriptado.textContent = textoDesencriptado;
    form.reset();
});

function desencriptarFrase(textoEncriptado){
    var textoDesencriptado = textoEncriptado;

    textoDesencriptado = textoDesencriptado.replace(/enter/igm,'e');
    textoDesencriptado = textoDesencriptado.replace(/ober/igm,'o');
    textoDesencriptado = textoDesencriptado.replace(/imes/igm,'i');
    textoDesencriptado = textoDesencriptado.replace(/ai/igm,'a');
    textoDesencriptado = textoDesencriptado.replace(/ufat/igm,'u');
    
    console.log(textoDesencriptado);
    return textoDesencriptado;
}

//****************       COMPROBAR VACÍO         ****************//

function comprobarVacio(texto){
    if(texto ===""){
        document.getElementById("mensaje-encriptado").style.display = "none";
        document.getElementById("sin-mensaje").style.display = "block"; 
        console.log("Comprobó los cambios 1");
    } else {
        document.getElementById("mensaje-encriptado").style.display = "block";
        document.getElementById("sin-mensaje").style.display = "none"; 
        console.log("Comprobó los cambios 2");
    }
}

//****************       BOTÓN COPIAR         ****************//

btnCopiar.addEventListener("click", function(){

    let copyText = document.querySelector("#texto-encriptado");
    copyText.select();
    document.execCommand("copy");
});



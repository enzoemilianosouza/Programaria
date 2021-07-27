document.getElementById ("botaoenviar").addEventListener ("click" , validaFormulario)

function validaFormulario () {  
if (document.getElementById("nomeusuario").value !=  "" && document.getElementById ("email").value != "" && document.getElementById("celular").value
!= ""){ alert ("Prontinho! você receberá as novidades por email.")}
else {alert ("preencha os campos nome e email")
  }
}


document.form1.registrar.onclick = procesar;
document.form1.telefono.keyprees = soloNumeros;
document.form1.limpiar.onclick = function (){
    alert(this.value);
}
onfocus=function (){
    if (this.style!=undefined)
        this.style.backgroundColor = "tomato";
}
onblur=function (){
    if (this.style!=undefined)
        this.style.backgroundColor = "white"
}
document.form1.nombre.onfocus= onfocus;
document.form1.correo.onfocus= onfocus;
document.form1.nombre.onblur= onblur;
document.form1.correo.onblur= onblur;
function procesar(){
    if (validar()){
        alert("Se proceso exitosamente..");
    }
}
function validar(){
    if (!esta_vacio(document.form1.nombre,
                    "Debe escribir el nombre"))
        if(!esta_vacio(document.form1.nombreUsuario,
                        "Debe escribir el nombre de Usuario"))
            if(!esta_vacio(document.form1.cedula,
                            "Debe escribir la cédula"))
                if(!esta_vacio(document.form1.correo,
                            "Debe escribir el correo"))
                if (validarcorreo(document.form1.correo,))
                    if (!esta_vacio(document.form1.calve,
                                "Debe escribir la clave"))
                        return true
                    else    
                        return false;
}
function validarUserName(nombreUsuario){
	regx=/^[A-Za-z0-9_-]{4,16}$/
	if (regx.test(correo.value))
		return true;
	else
	{
        alert("El nombre debe tener almenos 4 digitos y no empezar con numero");
		correo.focus();
		return false;
	}
}
/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numerosUno;
	var numerosDos;
	var resulto;

		numerosUno=document.getElementById('numeroUno').value;
		numerosDos=document.getElementById('numeroDos').value;
			numerosUno=parseInt(numerosUno);
			numerosDos=parseInt(numerosDos);
			resulto=numerosDos+numerosUno;



	alert(resulto);
}


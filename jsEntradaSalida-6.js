/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	
		numeroUno=6;
		numeroDos=6;
	
			numeroUno=document.getElementById('numeroUno').value;
			numeroDos=document.getElementById('numeroDos').value;
	
		//parseint para trasformar un texto a un numero
		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos; 
	alert (numeroUno+numeroDos);
}


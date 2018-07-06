/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
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

	resultado=numeroUno-numeroDos; 
	alert (numeroUno-numeroDos);
}

function multiplicar()
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

	resultado=numeroUno*numeroDos; 
	alert ("la respuestas de la multiplicacion es "+numeroUno*numeroDos);
}

function dividir()
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

	resultado=numeroUno/numeroDos; 
	alert ("la respuestas de la divicion es "+numeroUno/numeroDos);
}


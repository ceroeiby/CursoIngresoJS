/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var nUno;
	var nDos;
	var resultado;

			nUno=document.getElementById('numeroUno').value;
			nDos=document.getElementById('numeroDos').value;
			nUno=parseInt(nUno);
			nDos=parseInt(nDos);

		resultado=nUno+nDos;

	alert("Su suma es "+resultado);

}

function restar()
{
	var nUno;
	var nDos;
	var resultado;

			nUno=document.getElementById('numeroUno').value;
			nDos=document.getElementById('numeroDos').value;
			nUno=parseInt(nUno);
			nDos=parseInt(nDos);

		resultado=nUno-nDos;

	alert("Su resta es "+resultado);

}

function multiplicar()
{ 
	var nUno;
	var nDos;
	var resultado;

			nUno=document.getElementById('numeroUno').value;
			nDos=document.getElementById('numeroDos').value;
			nUno=parseInt(nUno);
			nDos=parseInt(nDos);

		resultado=nUno*nDos;

	alert("Su multiplicacion es "+resultado);

}

function dividir()
{
	var nUno;
	var nDos;
	var resultado;

			nUno=document.getElementById('numeroUno').value;
			nDos=document.getElementById('numeroDos').value;
			nUno=parseInt(nUno);
			nDos=parseInt(nDos);

		resultado=nUno/nDos;

	alert("Su divicion es "+resultado);
	
}


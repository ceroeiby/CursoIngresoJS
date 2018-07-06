/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//https://goo.gl/forms/VnqohAsztrtAUxsX2
	var numeroDividendo;
	var numeroDivisor;
	var SacarResto;

	
	//dividendo=6;
	//divisor=6;
	
	dividendo=document.getElementById('numeroDividendo').value;
	divisor=document.getElementById('numeroDivisor').value;
	
		//parseint para trasformar un texto a un numero
	dividendo=parseInt(dividendo);
	divisor=parseInt(divisor);

	SacarResto=numeroDividendo%numeroDivisor; 
	alert (numeroDividendo%numeroDivisor);
}

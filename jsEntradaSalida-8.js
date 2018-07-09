/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dUno;
	var dDos;
	var dres;

		dUno=document.getElementById('numeroDividendo').value;
		dDos=document.getElementById('numeroDivisor').value;

		divicion=dUno/dDos;

	dres=dUno%dDos;

	alert("El resto es "+dres);

}

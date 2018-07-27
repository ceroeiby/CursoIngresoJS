/*
prompt

1- ingreso de notas del 0 a 10
2- ingreso de sexo m o f 
3- por lo menos 3 alumnos

alert

a)El promedio
b)nota mas baja y sexo
c)varones aprovados +=6
*/
function mostrar()
{

	var sexo;
	var nombre;
	var nota;
	var cantidad;
	var cinco;

	cantidad=1;
	cinco=0;



	while(cinco<2)
		{
			{
			nota=prompt("ingrese sus nota");
			nota=parseInt(nota);
			while(!(nota <10 || nota >0))
				{
				nota=prompt("vuelva a ingresar la nota");
				nota=parseInt(nota);
				}

			cantidad=cantidad+1;

			}

		nombre=prompt("ingrese su nombre");

		while(!(sexo=="f" || sexo=="m"))
			{
			sexo = prompt("ingrese f ó m .");
			}

		}

	promedio=nota/cantidad;
	alert("Su promedio es "+promedio);


}

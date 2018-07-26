function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	//contador=prompt("Ingrese un numero");
	while(contador<5)
		{
		numero=prompt("Ingrese un numero");
		numero=parseInt(contador);
		acumulador=acumulador+numero;
		contador=contador+1;
		
		}

//fedeburster


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var negativo;
	var positivo;
	var canPositivos;
	var canNegativos;
	var cerO;
	var diferencia;
	var cantiDaddepares;


	positivo=0;
	negativo=0;
	canPositivos=0;
	canNegativos=0;
	cerO=0;
	cantiDaddepares=0;

	var respuesta="si";

	while(respuesta!="no")

	{

		numero= prompt("ingrese un numero");
		numero=parseInt(numero);
		

		if (numero<0)
			{
			negativo=negativo+numero;
			canNegativos=canNegativos+1
			}
		else 
			{
				if (numero>0)
				{
				positivo=positivo+numero;
				canPositivos=canPositivos+1;
				}
				else
				{
				cerO++;
				}
			}

			if (numero%2==0)
				{
				cantiDaddepares=cantiDaddepares+1
				}





		respuesta=prompt("ingrese no para salir");

	}

	diferencia=positivo-negativo;


	document.write("la suma del los negativos es "+negativo+" la suma del los positivo es "+positivo+" Cantidad de positivos "+canPositivos+" Cantidad de negativos "+canNegativos);
	document.write("  Cantidad de Ceros "+cerO);
	document.write("  promedio de los numeros positivos es "+positivo/canPositivos);
	document.write("  promedio de los numeros negativo es "+negativo/canNegativos);
	document.write("  Diferecia entre los numeros negativos y positivos es "+diferencia);
	document.write("  La cantidad de pares es "+cantiDaddepares);





}//FIN DE LA FUNCIÓN
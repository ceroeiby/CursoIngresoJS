function mostrar()
{
//tomo la edad  

	var edad
		edad=document.getElementById('edad').value; 
		edad=parseInt(edad);

	if (edad>=18)
	{
		alert("Es mayor");
	}
	/*if (edad<18)
	{
		alert("Es menor");
	}
	*/

	else
	/*con el else podemos saltar un if, en el caso de que
	sea menor saltara al siguiente alert*/

	{
		alert("Es menor");
	}
	
	

}//FIN DE LA FUNCIÓN
function mostrar()
{
//tomo la edad  

	
var edad;
var estadoCivil;
	
	edad=document.getElementById('edad').value;
	document.getElementById('estadoCivil').value=edad;
if (edad<=17)
	{
	alert("Es muy pequeño para No ser soltero");
	}


}//FIN DE LA FUNCIÓN
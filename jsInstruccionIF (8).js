function mostrar()
{
//tomo la edad  

	
var edad;
var estadoCivil;
	
	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

if (edad>=18 && estadoCivil == "Soltero")
	
	{
	alert("suertudo");
	}
else
	{
		if(edad>=18 && estadoCivil == "Casado")
			{
			alert("mi sentido pesame");
			}
		else
			{
			 if(edad>=18 && estadoCivil=="Divorciado")
			 	{
			 	alert("aleluya hermoso eres libre");
			 	}
			}

		 //Divorciado 
	}
}//FIN DE LA FUNCIÓN
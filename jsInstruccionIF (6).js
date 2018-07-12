function mostrar()
{
//tomo la edad  

	var edad
		edad=document.getElementById('edad').value; 
		edad=parseInt(edad);

	if (edad >=13 && edad <=17)
	//{
			{
			alert("Es adolecete");
			}
	if (edad >=18)
			{
			alert("Es mayor de eadad");
			}

	if (edad <=12)
			{
			alert("Es un niño");
			}
	//}

}//FIN DE LA FUNCIÓN
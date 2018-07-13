function mostrar()
{
	var nUno;
	var nDos;
	var nota;

		nUno=prompt ("primer valor");
		nDos=prompt("segundo valor");
			nUno=parseInt(nUno);
			nDos=parseInt(nDos);
			nota=parseInt(nota);

	if(nUno == nDos)
		{
		alert("Su numero uno es "+nUno+" Su numero uno es "+ nDos);
		}
		else
			{
			if (nUno>nDos)
			{
			nota=nUno/nDos;
			alert(nota);
			}
		else
			{
			if(nUno<nDos)
			{
			nota=nUno+nDos;
			if (nota<50)
			{
				alert("las suma es "+nota+" y es menor a 50");
			}
			
		}




/*
+var edad;
+var estadoCivil;
+	
+	edad=document.getElementById('edad').value;
+	estadoCivil=document.getElementById('estadoCivil').value;
+
+if (edad>=18 && estadoCivil == "Soltero")
+	
+	{
+	alert("suertudo");
+	}
+else
+	{
+		if(edad>=18 && estadoCivil == "Casado")
+			{
+			alert("mi sentido pesame");
+			}
+		else
+			{
+			 if(edad>=18 && estadoCivil=="Divorciado")
+			 	{
+			 	alert("aleluya hermoso eres libre");
+			 	}
+			}
*/

}

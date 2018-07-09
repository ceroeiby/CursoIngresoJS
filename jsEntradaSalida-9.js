/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var proc;
	//var sumaElporc;


		importe=document.getElementById('sueldo').value;
			importe=parseInt(importe);

			//esto fue negado por que en le ejercicion no funciona el Id resultado

		//proc=document.getElementById('resultado').value;
			proc=parseInt(proc);

			/*resporc= (importe*proc)/100;
			sumaElporc=importe+resporc;*/



			proc= prompt("ingrese el porsentaje para sumarlo");

			resporc=(importe*proc)/100;

			sumaElporc=importe+resporc;







	alert("Su importe con aumento es de "+sumaElporc);
	
}

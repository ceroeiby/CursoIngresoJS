/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var nUno;
	var nDos;
	var nTres;
	var resultado;

			nUno=document.getElementById('PrecioUno').value;
			nDos=document.getElementById('PrecioDos').value;
			nTres=document.getElementById('PrecioTres').value;
			nUno=parseInt(nUno);
			nDos=parseInt(nDos);
			nTres=parseInt(nTres);

		resultado=nUno+nDos+nTres;

	alert("Su suma es "+resultado);
}
function Promedio () 
{
	var nUno;
	var nDos;
	var nTres;
	var resultado;

			nUno=document.getElementById('PrecioUno').value;
			nDos=document.getElementById('PrecioDos').value;
			nTres=document.getElementById('PrecioTres').value;
			nUno=parseInt(nUno);
			nDos=parseInt(nDos);
			nTres=parseInt(nTres);

		resultado=(nUno+nDos+nTres)/3;

	alert("Su Promedio es "+resultado);
}
function PrecioFinal () 
{
	var nUno;
	var nDos;
	var nTres;
	var resultado;
	var masIva;

			nUno=document.getElementById('PrecioUno').value;
			nDos=document.getElementById('PrecioDos').value;
			nTres=document.getElementById('PrecioTres').value;
			nUno=parseInt(nUno);
			nDos=parseInt(nDos);
			nTres=parseInt(nTres);

		resultado=nUno+nDos+nTres;
		desIvan=resultado*21/100;
		masIva=resultado+desIvan;

		

	alert("Su Precio final mas el Iva es "+masIva);
}
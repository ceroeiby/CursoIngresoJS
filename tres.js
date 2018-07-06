function mostrar()
{

	var presio;
	var porsentajeDeDescuento;

		presio= prompt ("presio");
		document.getElementById('elPrecioFinal').value = presio;
		 
		porsentajeDeDescuento = prompt ("Descuento");
		document.getElementById('elPrecioFinal').value = porsentajeDeDescuento;

	document.getElementById('elPrecioFinal').value = presio*2;

}

function validarFormulario() {
  const cotizacionForm = document.querySelector("#cotizacion-form");

  let nombre = cotizacionForm["nombre-cliente"].value;
  let tipoTrabajo = cotizacionForm["tipo-trabajo"].value;
  let tipoCliente = cotizacionForm["tipo-cliente"].value;
  let cantidad = cotizacionForm["cantidad"].value;
  let moldes = cotizacionForm["moldes"].value;
  let multiplicidad = cotizacionForm["multiplicidad"].value;
  let sobrantes = cotizacionForm["sobrantes"].value;
  let untal = parseInt(cotizacionForm["untal"].value);
  let diseno = parseInt(cotizacionForm["diseno"].value);
  let gastosGenerales = parseInt(cotizacionForm["gastos-generales"].value);
  let utilidad = parseInt(cotizacionForm["utilidad"].value);
  let impuesto = parseInt(cotizacionForm["impuesto"].value);
  let hojasresma = cotizacionForm["hojas-resma"].value;
  let costoresma = cotizacionForm["costo-resma"].value;
  let costotinta = cotizacionForm["costo-tinta"].value;

  if (nombre === "") {
    alert("el campo nombre esta vacío");
    return false;
  } else if (tipoTrabajo === "") {
    alert("el campo tipo de trabajo está vacío");
    return false;
  } else if (tipoCliente === "") {
    alert("el campo tipo de cliente está vacío");
    return false;
  } else if (cantidad === "") {
    alert("El campo cantidad está vacío");
    return false;
  } else if (moldes === "") {
    alert("El campo moldes está vacío");
    return false;
  } else if (multiplicidad === "") {
    alert("El campo multiplicidad está vacío");
    return false;
  } else if (sobrantes === "") {
    alert("El campo sobrantes está vacío");
    return false;
  } else if (untal === "") {
    alert("El campo unidades/talonario está vacío");
    return false;
  } else if (diseno === "") {
    alert("El campo Valor diseno está vacío");
    return false;
  } else if (gastosGenerales === "") {
    alert("El campo Gastos Generales está vacío");
    return false;
  } else if (utilidad === "") {
    alert("El campo utilidad está vacío");
    return false;
  } else if (impuesto === "") {
    alert("El campo impuesto está vacío");
    return false;
  } else if (hojasresma === "") {
    alert("El campo hojas resma está vacío");
    return false;
  } else if (costoresma === "") {
    alert("El campo costo resma está vacío");
    return false;
  } else if (costotinta === "") {
    alert("El campo costo tinta está vacío");
    return false;
  } else {
    return true;
  }
}

export default validarFormulario;

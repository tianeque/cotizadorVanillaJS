import validarFormulario from "./validarFormulario";
import { $cl } from "./helpers";
import { calculos } from "./calculos";

const cotizacionForm = document.querySelector("#cotizacion-form");
const btnCalcularPrecio = cotizacionForm["btn-calcular-precio"];
const btnCalcularDetalle = cotizacionForm["btn-calcular-detalle"];

const resultadoPrecio = document.querySelector("#resultado-precio");
const resultadoDetalle = document.querySelector("#resultado-detalle");

export const mostrarResultadosPrecio = () => {
  let template = "";
  if (validarFormulario()) {
    template = `
    <div>
      <p>Precio con IVA: ${$cl(calculos().precioConIVA())}</p>
      <p>Precio Neto: ${$cl(calculos().precioDeVenta())}</p>
    </div>
    `;
  } else {
    template = `<p>No se ha podido realizar el cálculo<p>`;
  }
  resultadoPrecio.innerHTML = template;
};

export const mostrarResultadosDetalle = () => {
  let template = "";
  if (validarFormulario()) {
    template = `
    <div>
      <p>Tiraje real: ${$cl(calculos().tirajeReal())}</p>
      <p>Tiraje útil: ${$cl(calculos().tirajeUtil())}</p>
      <p>Costo papel: ${$cl(calculos().costoPapel())}</p>
      <p>Diseño: ${$cl(calculos().diseno())}</p>
      <p>Costo Impresión: ${$cl(calculos().costoImpresion())}</p>
      <p>Costo Impresión Mano de Obra: ${$cl(calculos().costoManoDeObra())}</p>
      <p>Costo alzado: ${$cl(calculos().costoAlzado())}</p>
      <p>Costo separado: ${$cl(calculos().costoSeparado())}</p>
      <p>Costo corcheteado: ${$cl(calculos().costoCorcheteado())}</p>
      <p>Costo corte: ${$cl(calculos().costoCorte())}</p>
      <p>Costo perforado: ${$cl(calculos().costoPerforado())}</p>
      <p>Costo terminado: ${$cl(calculos().costoTerminado())}</p>
      <hr />
      <p>Costo operacional: ${$cl(calculos().costoOperacional())}</p>
      <p>Costo total: ${$cl(calculos().costoTotal())}</p>
      <p>Precio Neto: ${$cl(calculos().precioDeVenta())}</p>
      <p>Precio con IVA: ${$cl(calculos().precioConIVA())}</p>
    </div>
    `;
  } else {
    template = `<p>No se ha podido realizar el cálculo<p>`;
  }
  resultadoDetalle.innerHTML = template;
};

btnCalcularPrecio.addEventListener("click", mostrarResultadosPrecio);
btnCalcularDetalle.addEventListener("click", mostrarResultadosDetalle);

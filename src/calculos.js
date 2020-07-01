export const calculos = () => {
  // let nombre = document.getElementById('nombre-cliente').value
  // let tipoTrabajo = document.getElementById('tipo-trabajo').value
  // let tipoCliente = document.getElementById('tipo-cliente').value
  let cantidad = document.getElementById("cantidad").value;
  let moldes = document.getElementById("moldes").value;
  let multiplicidad = document.getElementById("multiplicidad").value;
  let sobrantes = document.getElementById("sobrantes").value;
  let untal = parseInt(document.getElementById("untal").value);
  let diseno = parseInt(document.getElementById("diseno").value);
  let gastosGenerales = parseInt(
    document.getElementById("gastos-generales").value
  );
  let utilidad = parseInt(document.getElementById("utilidad").value);
  let impuesto = parseInt(document.getElementById("impuesto").value);
  let hojasresma = document.getElementById("hojas-resma").value;
  let costoresma = document.getElementById("costo-resma").value;
  let costotinta = document.getElementById("costo-tinta").value;
  let alzado = document.getElementById("alzado").checked;
  let separado = document.getElementById("separado").checked;
  let corcheteado = document.getElementById("corcheteado").checked;
  let corte = document.getElementById("corte").checked;
  let perforado = document.getElementById("perforado").checked;

  const modeloMatematico = {
    pagoOperacionesMenores: 20,
    pagoAlzado: 600,
    pagoImpresion: 1600,
    tirajeUtil: function () {
      return (cantidad / moldes) * multiplicidad;
    },
    tirajeReal: function () {
      return this.tirajeUtil() + sobrantes * multiplicidad;
    },
    costoPapel: function () {
      return (costoresma / hojasresma) * this.tirajeReal();
    },
    diseno: function () {
      return diseno;
    },
    costoImpresion: function () {
      return this.tirajeReal() * costotinta;
    },
    costoManoDeObra: function () {
      const x = this.tirajeUtil() % 1000;
      if (x === 0) {
        return (this.pagoImpresion * this.tirajeUtil()) / 1000;
      } else {
        return this.pagoImpresion * parseInt(this.tirajeUtil() / 1000 + 1);
      }
    },
    costoAlzado: function () {
      if (alzado) {
        const x = this.tirajeUtil() % 1000;
        if (x === 0) {
          return (this.pagoAlzado * this.tirajeUtil()) / 1000;
        } else {
          return this.pagoAlzado * (parseInt(this.tirajeUtil() / 1000) + 1);
        }
      } else {
        return 0;
      }
    },
    costoPerforado: function () {
      if (perforado) {
        const x = this.tirajeUtil() % 1000;
        if (x === 0) {
          return (this.pagoAlzado * this.tirajeUtil()) / 1000;
        } else {
          return this.pagoAlzado * (parseInt(this.tirajeUtil() / 1000) + 1);
        }
      } else {
        return 0;
      }
    },
    costoTerminado: function () {
      return (this.tirajeUtil() / untal) * this.pagoOperacionesMenores;
    },
    costoSeparado: function () {
      if (separado) {
        return (this.tirajeUtil() / untal) * this.pagoOperacionesMenores;
      } else {
        return 0;
      }
    },
    costoCorcheteado: function () {
      if (corcheteado) {
        return (this.tirajeUtil() / untal) * this.pagoOperacionesMenores;
      } else {
        return 0;
      }
    },
    costoCorte: function () {
      if (corte) {
        return (this.tirajeUtil() / untal) * this.pagoOperacionesMenores;
      } else {
        return 0;
      }
    },
    costoOperacional: function () {
      return (
        diseno +
        this.costoPapel() +
        this.costoImpresion() +
        this.costoManoDeObra() +
        this.costoAlzado() +
        this.costoSeparado() +
        this.costoCorcheteado() +
        this.costoCorte() +
        this.costoTerminado() +
        this.costoPerforado()
      );
    },
    costoTotal: function () {
      return this.costoOperacional() * (1 + gastosGenerales / 100);
    },
    precioDeVenta: function () {
      let precio =
        this.costoTotal() * (1 + utilidad / 100) +
        ((impuesto / 100) * this.costoTotal() * utilidad) / 100;
      precio = Math.ceil(precio / 100) * 100;
      return precio;
    },
    precioConIVA: function () {
      return this.precioDeVenta() * 1.19;
    },
  };

  return modeloMatematico;
};

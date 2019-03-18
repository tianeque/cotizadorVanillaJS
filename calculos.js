
// declaración de variables

const btnCalcular = document.getElementById('btn-calcular')
let resultado = document.getElementById('resultado')

// Validaciones

function validar () {
  let nombre = document.getElementById('nombre-cliente').value
  let tipoTrabajo = document.getElementById('tipo-trabajo').value
  let tipoCliente = document.getElementById('tipo-cliente').value
  let cantidad = document.getElementById('cantidad').value
  let moldes = document.getElementById('moldes').value
  let multiplicidad = document.getElementById('multiplicidad').value
  let sobrantes = document.getElementById('sobrantes').value
  let untal = parseInt(document.getElementById('untal').value)
  let diseno = parseInt(document.getElementById('diseno').value)
  let gastosGenerales = parseInt(document.getElementById('gastos-generales').value)
  let utilidad = parseInt(document.getElementById('utilidad').value)
  let impuesto = parseInt(document.getElementById('impuesto').value)
  let hojasresma = document.getElementById('hojas-resma').value
  let costoresma = document.getElementById('costo-resma').value
  let costotinta = document.getElementById('costo-tinta').value

  if (nombre === '') {
    alert('el campo nombre esta vacío')
    return false
  } else if (tipoTrabajo === '') {
    alert('el campo tipo de trabajo está vacío')
    return false
  } else if (tipoCliente === '') {
    alert('el campo tipo de cliente está vacío')
    return false
  } else if (cantidad === '') {
    alert('El campo cantidad está vacío')
    return false
  } else if (moldes === '') {
    alert('El campo moldes está vacío')
    return false
  } else if (multiplicidad === '') {
    alert('El campo multiplicidad está vacío')
    return false
  } else if (sobrantes === '') {
    alert('El campo sobrantes está vacío')
    return false
  } else if (untal === '') {
    alert('El campo unidades/talonario está vacío')
    return false
  } else if (diseno === '') {
    alert('El campo Valor diseno está vacío')
    return false
  } else if (gastosGenerales === '') {
    alert('El campo Gastos Generales está vacío')
    return false
  } else if (utilidad === '') {
    alert('El campo utilidad está vacío')
    return false
  } else if (impuesto === '') {
    alert('El campo impuesto está vacío')
    return false
  } else if (hojasresma === '') {
    alert('El campo hojas resma está vacío')
    return false
  } else if (costoresma === '') {
    alert('El campo costo resma está vacío')
    return false
  } else if (costotinta === '') {
    alert('El campo costo tinta está vacío')
    return false
  } else {
    return true
  }
}

// asignacion de evento click
btnCalcular.addEventListener('click', mostrarResultados)

// Calculos

function calculos() {
  // let nombre = document.getElementById('nombre-cliente').value
  // let tipoTrabajo = document.getElementById('tipo-trabajo').value
  // let tipoCliente = document.getElementById('tipo-cliente').value
  let cantidad = document.getElementById('cantidad').value
  let moldes = document.getElementById('moldes').value
  let multiplicidad = document.getElementById('multiplicidad').value
  let sobrantes = document.getElementById('sobrantes').value
  let untal = parseInt(document.getElementById('untal').value)
  let diseno = parseInt(document.getElementById('diseno').value)
  let gastosGenerales = parseInt(document.getElementById('gastos-generales').value)
  let utilidad = parseInt(document.getElementById('utilidad').value)
  let impuesto = parseInt(document.getElementById('impuesto').value)
  let hojasresma = document.getElementById('hojas-resma').value
  let costoresma = document.getElementById('costo-resma').value
  let costotinta = document.getElementById('costo-tinta').value
  let alzado = document.getElementById('alzado').checked
  let separado = document.getElementById('separado').checked
  let corcheteado = document.getElementById('corcheteado').checked
  let corte = document.getElementById('corte').checked
  let perforado = document.getElementById('perforado').checked

  const calculos2 = {

    pagoOperacionesMenores: 15,
    pagoAlzado: 500,
    pagoImpresion: 1600,
    tirajeUtil: function () {
      return cantidad / moldes * multiplicidad
    },
    tirajeReal: function () {
      return this.tirajeUtil() + sobrantes * multiplicidad
    },
    costoPapel: function () {
      return costoresma / hojasresma * this.tirajeReal()
    },
    diseno: function () {
      return diseno
    },
    costoImpresion: function () {
      return this.tirajeReal() * costotinta
    },
    costoManoDeObra: function () {
      const x = this.tirajeUtil() % 1000
      if (x === 0) {
        return this.pagoImpresion * this.tirajeUtil() / 1000
      } else {
        return this.pagoImpresion * parseInt(this.tirajeUtil() / 1000 + 1)
      }
    },
    costoAlzado: function () {
      if (alzado) {
        const x = this.tirajeUtil() % 1000
        if (x === 0) {
          return this.pagoAlzado * this.tirajeUtil() / 1000
        } else {
          return this.pagoAlzado * (parseInt(this.tirajeUtil() / 1000) + 1)
        }
      } else {
        return 0
      }
    },
    costoPerforado: function () {
      if (perforado) {
        const x = this.tirajeUtil() % 1000
        if (x === 0) {
          return this.pagoAlzado * this.tirajeUtil() / 1000
        } else {
          return this.pagoAlzado * (parseInt(this.tirajeUtil() / 1000) + 1)
        }
      } else {
        return 0
      }
    },
    costoTerminado: function () {
      return this.tirajeUtil() / untal * this.pagoOperacionesMenores
    },
    costoSeparado: function () {
      if (separado) {
        return this.tirajeUtil() / untal * this.pagoOperacionesMenores
      } else {
        return 0
      }
    },
    costoCorcheteado: function () {
      if (corcheteado) {
        return this.tirajeUtil() / untal * this.pagoOperacionesMenores
      } else {
        return 0
      }
    },
    costoCorte: function () {
      if (corte) {
        return this.tirajeUtil() / untal * this.pagoOperacionesMenores
      } else {
        return 0
      }
    },
    costoOperacional: function () {
      return diseno + this.costoPapel() + this.costoImpresion() +
          this.costoManoDeObra() + this.costoAlzado() + this.costoSeparado() +
          this.costoCorcheteado() + this.costoCorte() + this.costoTerminado() +
          this.costoPerforado()
    },
    costoTotal: function () {
      return this.costoOperacional() * (1 + gastosGenerales / 100)
    },
    precioDeVenta: function () {
      let precio = this.costoTotal() * (1 + utilidad / 100) + impuesto / 100 * this.costoTotal() * utilidad / 100
      precio = Math.ceil(precio / 100) * 100
      return precio
    },
    precioConIVA: function () {
      return this.precioDeVenta() * 1.19
    }
  }

  return calculos2
}

function mostrarResultados () {
  let template = ''
  if (validar()) {
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
    `
  } else {
    template = `<p>No se ha podido realizar el cálculo<p>`
  }
  resultado.innerHTML = template
}

function $cl (number) {
  let pesos = new Intl.NumberFormat('cl-ES').format(number)
  pesos = `$ ${pesos}`
  return pesos
}

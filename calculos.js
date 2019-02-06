
// declaración de variables
const nombre = document.getElementById('nombre-cliente').value
const tipoTrabajo = document.getElementById('tipo-trabajo').value
const cantidad = document.getElementById('cantidad').value
const moldes = document.getElementById('moldes').value
const multiplicidad = document.getElementById('multiplicidad').value
const sobrantes = document.getElementById('sobrantes').value
const untal = parseInt(document.getElementById('untal').value)
const diseno = parseInt(document.getElementById('diseno').value)
const gastosGenerales = parseInt(document.getElementById('gastosgenerales').value)
const utilidad = parseInt(document.getElementById('utilidad').value)

const impuesto = parseInt(document.getElementById('impuesto').value)

const hojasresma = document.getElementById('hojasresma').value
const costoresma = document.getElementById('costoresma').value
const costotinta = document.getElementById('costotinta').value
const alzado = document.getElementById('alzado').checked
const separado = document.getElementById('separado').checked
const corcheteado = document.getElementById('corcheteado').checked
const corte = document.getElementById('corte').checked
const perforado = document.getElementById('perforado').checked

const btnCalcular = document.getElementById('btn-calcular')
const resultado = document.getElementById('resultado')



// asignacion de evento click
btnCalcular.addEventListener('click', mostrarResultados)

// Calculos
const calculos = {
  pagoOperacionesMenores: 15,
  pagoAlzado: 500,
  pagoImpresion: 1600,
  tirajeUtil: function () {
    return cantidad / moldes * multiplicidad
  },
  tirajeReal: function () {
    return this.tirajeUtil() + sobrantes * multiplicidad
  },
  diseno: function () {
    return diseno
  },
  costoPapel: function () {
    return costoresma / hojasresma * this.tirajeReal()
  },
  costoImpresion: function () {
    return this.tirajeReal() * costotinta
  },
  costoManoDeObra: function () {
    const x = this.tirajeUtil() % 1000
    if (x == 0) {
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
  costoCorcheteado: function (tarea) {
    if (corcheteado) {
      return this.tirajeUtil() / untal * this.pagoOperacionesMenores
    } else {
      return 0
    }
  },
  costoCorte: function (tarea) {
    if (corte) {
      return this.tirajeUtil() / untal * this.pagoOperacionesMenores
    } else {
      return 0
    }
  },
  costoOperacional: function () {
    return this.diseno() + this.costoPapel() + this.costoImpresion() +
        this.costoManoDeObra() + this.costoAlzado() + this.costoSeparado() +
        this.costoCorcheteado() + this.costoCorte() + this.costoTerminado() +
        this.costoPerforado()
  },
  costoTotal: function () {
    return this.costoOperacional() * (1 + gastosGenerales / 100)
  },
  precioDeVenta: function () {
    precio = this.costoTotal() * (1 + utilidad / 100) + impuesto / 100 * this.costoTotal() * utilidad / 100
    precio = Math.ceil(precio / 100) * 100
    return precio
  },
  precioConIVA: function () {
    return this.precioDeVenta() * 1.19
  }
}

function mostrarResultados () {
  const template = `
    <div>
      <p>Tiraje real: ${$cl(calculos.tirajeReal())}</p>
      <p>Tiraje útil: ${$cl(calculos.tirajeUtil())}</p>
      <p>Costo papel: ${$cl(calculos.costoPapel())}</p>
      <p>Diseño: ${$cl(calculos.diseno())}</p>
      <p>Costo Impresión: ${$cl(calculos.costoImpresion())}</p>
      <p>Costo Impresión Mano de Obra: ${$cl(calculos.costoManoDeObra())}</p>
      <p>Costo alzado: ${$cl(calculos.costoAlzado())}</p>
      <p>Costo separado: ${$cl(calculos.costoSeparado())}</p>
      <p>Costo corcheteado: ${$cl(calculos.costoCorcheteado())}</p>
      <p>Costo corte: ${$cl(calculos.costoCorte())}</p>
      <p>Costo perforado: ${$cl(calculos.costoPerforado())}</p>
      <p>Costo terminado: ${$cl(calculos.costoTerminado())}</p>
      <hr />
      <p>Costo operacional: ${$cl(calculos.costoOperacional())}</p>
      <p>Costo total: ${$cl(calculos.costoTotal())}</p>
      <p>Precio Neto: ${$cl(calculos.precioDeVenta())}</p>
      <p>Precio con IVA: ${$cl(calculos.precioConIVA())}</p>
    </div>
    `
  resultado.innerHTML = template
}

function $cl (number) {
  pesos = new Intl.NumberFormat('cl-ES').format(number)
  pesos = `$ ${pesos}`
  return pesos
}

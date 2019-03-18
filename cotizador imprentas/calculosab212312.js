const cantidades5x1 = [5000, 10000]
const precios5x1 = [22000, 32000]
const precios5x1aut = [32000, 40000]
const cantidades = [50, 100, 200, 250, 300, 400, 500, 1000, 2000, 3000, 4000, 5000]
const parametrosEconomicos = [
  {
    htmlId: 'boletas-1-4-carta',
    trabajo: 'boletas 1/4 carta',
    moldes: 4,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 3200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'boletas-1-2-carta',
    trabajo: 'boletas 1/2 carta',
    moldes: 2,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 3200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-carta',
    trabajo: 'Formularios Carta Duplicados',
    moldes: 1,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 3200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-carta',
    trabajo: 'Formularios Carta Triplicados',
    moldes: 1,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 3200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-carta',
    trabajo: 'Formularios Carta Cuadruplicados',
    moldes: 1,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 3200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-1-2-carta',
    trabajo: 'Formularios 1/2 Carta Duplicados',
    moldes: 2,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 3200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-1-2-carta',
    trabajo: 'Formularios 1/2 Carta Triplicados',
    moldes: 2,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 3200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-1-2-carta',
    trabajo: 'Formularios 1/2 Carta Cuadruplicados',
    moldes: 2,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 3200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-1-4-carta',
    trabajo: 'Formularios 1/4 Carta Duplicados',
    moldes: 4,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 3200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-1-4-carta',
    trabajo: 'Formularios 1/4 Carta Triplicados',
    moldes: 4,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 3200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-1-4-carta',
    trabajo: 'Formularios 1/4 Carta Cuadruplicados',
    moldes: 4,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 3200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-oficio',
    trabajo: 'Formularios Oficio Duplicados',
    moldes: 1,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 4200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-oficio',
    trabajo: 'Formularios Oficio Triplicados',
    moldes: 1,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 4200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-oficio',
    trabajo: 'Formularios Oficio Cuadruplicados',
    moldes: 1,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 4200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-1-2-oficio',
    trabajo: 'Formularios 1/2 Oficio Duplicados',
    moldes: 2,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 4200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-1-2-oficio',
    trabajo: 'Formularios 1/2 Oficio Triplicados',
    moldes: 2,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 4200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-1-2-oficio',
    trabajo: 'Formularios 1/2 Oficio Cuadruplicados',
    moldes: 2,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 4200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-1-4-oficio',
    trabajo: 'Formularios 1/4 Oficio Duplicados',
    moldes: 4,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 4200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-1-4-oficio',
    trabajo: 'Formularios 1/4 Oficio Triplicados',
    moldes: 4,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 4200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  },
  {
    htmlId: 'formularios-1-4-oficio',
    trabajo: 'Formularios 1/4 Oficio Cuadruplicados',
    moldes: 4,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 75,
    utilidad: 25,
    impuesto: 27,
    hojasresma: 500,
    costoresma: 4200,
    costotinta: 2,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600
  }
]

// cantidad es un integer
// parámetros es un objeto
function calculos (cantidad, parametros) {
  const calculos2 = {
    trabajo: parametros.trabajo,
    cantidad: cantidad,
    moldes: parametros.moldes,
    multiplicidad: parametros.multiplicidad,
    costoresma: parametros.costoresma,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600,
    sobrantes: parametros.sobrantes,
    untal: parametros.untal,
    diseno: parametros.diseno,
    gastosGenerales: parametros.gastosGenerales,
    utilidad: parametros.utilidad,
    impuesto: parametros.impuesto,
    hojasresma: parametros.hojasresma,
    costotinta: parametros.costotinta,
    alzado: parametros.alzado,
    separado: parametros.separado,
    corcheteado: parametros.corcheteado,
    corte: parametros.corte,
    perforado: parametros.perforado,
    talonarios: function () {
      return this.cantidad / this.untal
    },
    tirajeUtil: function () {
      return this.cantidad / this.moldes * this.multiplicidad
    },
    tirajeReal: function () {
      return this.tirajeUtil() + this.sobrantes * this.multiplicidad
    },
    costoPapel: function () {
      return this.costoresma / this.hojasresma * this.tirajeReal()
    },
    costoImpresion: function () {
      return this.tirajeReal() * this.costotinta
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
      if (this.alzado) {
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
      if (this.perforado) {
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
      return this.tirajeUtil() / this.untal * this.pagoOperacionesMenores
    },
    costoSeparado: function () {
      if (this.separado) {
        return this.tirajeUtil() / this.untal * this.pagoOperacionesMenores
      } else {
        return 0
      }
    },
    costoCorcheteado: function () {
      if (this.corcheteado) {
        return this.tirajeUtil() / this.untal * this.pagoOperacionesMenores
      } else {
        return 0
      }
    },
    costoCorte: function () {
      if (this.corte) {
        return this.tirajeUtil() / this.untal * this.pagoOperacionesMenores
      } else {
        return 0
      }
    },
    costoOperacional: function () {
      return this.diseno + this.costoPapel() + this.costoImpresion() +
          this.costoManoDeObra() + this.costoAlzado() + this.costoSeparado() +
          this.costoCorcheteado() + this.costoCorte() + this.costoTerminado() +
          this.costoPerforado()
    },
    costoTotal: function () {
      return this.costoOperacional() * (1 + this.gastosGenerales / 100)
    },
    precioDeVenta: function () {
      let precio = this.costoTotal() * (1 + this.utilidad / 100) + this.impuesto / 100 * this.costoTotal() * this.utilidad / 100
      precio = Math.ceil(precio / 100) * 100
      return precio
    },
    precioConIVA: function () {
      return this.precioDeVenta() * 1.19
    }
  }

  return calculos2
}

// id corresponde al parametro id, esta incluido en los objetos base y en el html
function mostrarResultados (id) {
  const cuerpoDeTabla = document.getElementById('cuerpo-de-tabla')
  let template = ''

  parametrosEconomicos.map(function (parametros) {
    if (parametros.htmlId === id) {
      cantidades.map(function (cantidad) {
        template += `
            <tr>
              <td>${calculos(cantidad, parametros).trabajo}</th>
              <td>${calculos(cantidad, parametros).cantidad}</th>
              <td>${calculos(cantidad, parametros).talonarios()}</td>
              <td>${$cl(calculos(cantidad, parametros).precioDeVenta())}</td>
              <td>${$cl(calculos(cantidad, parametros).precioConIVA())}</td>
            </tr>
      `
      })
    }
  })

  cuerpoDeTabla.innerHTML = template
}

function $cl (number) {
  let pesos = new Intl.NumberFormat('cl-ES').format(number)
  pesos = `$ ${pesos}`
  return pesos
}

// Manipulacion de eventos click de la barra lateral
document.getElementById('boletas-1-2-carta').addEventListener('click', function (event) {
  mostrarResultados(document.getElementById('boletas-1-2-carta').id)
})

document.getElementById('boletas-1-4-carta').addEventListener('click', function (event) {
  mostrarResultados(document.getElementById('boletas-1-4-carta').id)
})

document.getElementById('formularios-carta').addEventListener('click', function (event) {
  mostrarResultados(document.getElementById('formularios-carta').id)
})

document.getElementById('formularios-1-2-carta').addEventListener('click', function (event) {
  mostrarResultados(document.getElementById('formularios-1-2-carta').id)
})

document.getElementById('formularios-1-4-carta').addEventListener('click', function (event) {
  mostrarResultados(document.getElementById('formularios-1-4-carta').id)
})

document.getElementById('formularios-oficio').addEventListener('click', function (event) {
  mostrarResultados(document.getElementById('formularios-oficio').id)
})

document.getElementById('formularios-1-2-oficio').addEventListener('click', function (event) {
  mostrarResultados(document.getElementById('formularios-1-2-oficio').id)
})

document.getElementById('formularios-1-4-oficio').addEventListener('click', function (event) {
  mostrarResultados(document.getElementById('formularios-1-4-oficio').id)
})
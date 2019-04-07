const precios5x1 = [
  { htmlId: 'boletas-5x1', producto: 'Boletas 5x1', cantidad: 5000, precio: 13000 },
  { htmlId: 'boletas-5x1', producto: 'Boletas 5x1', cantidad: 10000, precio: 22000 },
  { htmlId: 'boletas-5x1', producto: 'Boletas 5x1', cantidad: 15000, precio: 32000 },
  { htmlId: 'boletas-5x1', producto: 'Boletas 5x1', cantidad: 20000, precio: 42000 },
  { htmlId: 'boletas-5x1', producto: 'Boletas 5x1', cantidad: 25000, precio: 51500 },
  { htmlId: 'boletas-5x1', producto: 'Boletas 5x1', cantidad: 30000, precio: 60200 },
  { htmlId: 'boletas-5x1', producto: 'Boletas 5x1', cantidad: 40000, precio: 80200 },
  { htmlId: 'boletas-5x1', producto: 'Boletas 5x1', cantidad: 50000, precio: 100200 },
  { htmlId: 'boletas-5x1', producto: 'Boletas 5x1', cantidad: 60000, precio: 119000 },
  { htmlId: 'boletas-5x1', producto: 'Boletas 5x1', cantidad: 80000, precio: 155900 },
  { htmlId: 'boletas-5x1', producto: 'Boletas 5x1', cantidad: 100000, precio: 193400 },
  { htmlId: 'boletas-5x1', producto: 'Boletas 5x1', cantidad: 150000, precio: 289200 },
  { htmlId: 'boletas-5x1', producto: 'Boletas 5x1', cantidad: 200000, precio: 381600 },
  { htmlId: 'boletas-5x1-aut', producto: 'Boletas 5x1 Aut', cantidad: 5000, precio: 30000 },
  { htmlId: 'boletas-5x1-aut', producto: 'Boletas 5x1 Aut', cantidad: 10000, precio: 44600 },
  { htmlId: 'boletas-5x1-aut', producto: 'Boletas 5x1 Aut', cantidad: 15000, precio: 58500 },
  { htmlId: 'boletas-5x1-aut', producto: 'Boletas 5x1 Aut', cantidad: 20000, precio: 73200 },
  { htmlId: 'boletas-5x1-aut', producto: 'Boletas 5x1 Aut', cantidad: 25000, precio: 91100 },
  { htmlId: 'boletas-5x1-aut', producto: 'Boletas 5x1 Aut', cantidad: 30000, precio: 104900 },
  { htmlId: 'boletas-5x1-aut', producto: 'Boletas 5x1 Aut', cantidad: 40000, precio: 13610 },
  { htmlId: 'boletas-5x1-aut', producto: 'Boletas 5x1 Aut', cantidad: 50000, precio: 168600 },
  { htmlId: 'boletas-5x1-aut', producto: 'Boletas 5x1 Aut', cantidad: 60000, precio: 196200 },
  { htmlId: 'boletas-5x1-aut', producto: 'Boletas 5x1 Aut', cantidad: 80000, precio: 261100 },
  { htmlId: 'boletas-5x1-aut', producto: 'Boletas 5x1 Aut', cantidad: 100000, precio: 324300 },
  { htmlId: 'boletas-5x1-aut', producto: 'Boletas 5x1 Aut', cantidad: 150000, precio: 485400 },
  { htmlId: 'boletas-5x1-aut', producto: 'Boletas 5x1 Aut', cantidad: 200000, precio: 642100 }
]

const parametrosEconomicosBase = {
  gastosGenerales: 60,
  utilidad: 25,
  impuesto: 27,
  hojasresma: 500,
  costoresmacarta: 3200,
  costoresmaoficio: 4000,
  costotinta: 2,
  pagoOperacionesMenores: 15,
  pagoAlzado: 600,
  pagoImpresion: 1600
}

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
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmacarta,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'boletas-1-2-carta',
    trabajo: 'boletas 1/2 carta',
    moldes: 2,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmacarta,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-carta',
    trabajo: 'Formularios Carta Duplicados',
    moldes: 1,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmacarta,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-carta',
    trabajo: 'Formularios Carta Triplicados',
    moldes: 1,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmacarta,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-carta',
    trabajo: 'Formularios Carta Cuadruplicados',
    moldes: 1,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmacarta,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-1-2-carta',
    trabajo: 'Formularios 1/2 Carta Duplicados',
    moldes: 2,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmacarta,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-1-2-carta',
    trabajo: 'Formularios 1/2 Carta Triplicados',
    moldes: 2,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmacarta,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-1-2-carta',
    trabajo: 'Formularios 1/2 Carta Cuadruplicados',
    moldes: 2,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmacarta,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-1-4-carta',
    trabajo: 'Formularios 1/4 Carta Duplicados',
    moldes: 4,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmacarta,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-1-4-carta',
    trabajo: 'Formularios 1/4 Carta Triplicados',
    moldes: 4,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmacarta,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-1-4-carta',
    trabajo: 'Formularios 1/4 Carta Cuadruplicados',
    moldes: 4,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmacarta,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-oficio',
    trabajo: 'Formularios Oficio Duplicados',
    moldes: 1,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmaoficio,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-oficio',
    trabajo: 'Formularios Oficio Triplicados',
    moldes: 1,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmaoficio,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-oficio',
    trabajo: 'Formularios Oficio Cuadruplicados',
    moldes: 1,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmaoficio,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-1-2-oficio',
    trabajo: 'Formularios 1/2 Oficio Duplicados',
    moldes: 2,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmaoficio,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-1-2-oficio',
    trabajo: 'Formularios 1/2 Oficio Triplicados',
    moldes: 2,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmaoficio,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-1-2-oficio',
    trabajo: 'Formularios 1/2 Oficio Cuadruplicados',
    moldes: 2,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmaoficio,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-1-4-oficio',
    trabajo: 'Formularios 1/4 Oficio Duplicados',
    moldes: 4,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmaoficio,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-1-4-oficio',
    trabajo: 'Formularios 1/4 Oficio Triplicados',
    moldes: 4,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmaoficio,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
  },
  {
    htmlId: 'formularios-1-4-oficio',
    trabajo: 'Formularios 1/4 Oficio Cuadruplicados',
    moldes: 4,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    gastosGenerales: parametrosEconomicosBase.gastosGenerales,
    utilidad: parametrosEconomicosBase.utilidad,
    impuesto: parametrosEconomicosBase.impuesto,
    hojasresma: parametrosEconomicosBase.hojasresma,
    costoresma: parametrosEconomicosBase.costoresmaoficio,
    costotinta: parametrosEconomicosBase.costotinta,
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
    pagoAlzado: parametrosEconomicosBase.pagoAlzado,
    pagoImpresion: parametrosEconomicosBase.pagoImpresion
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

function mostrarResultados5x1 (id) {
  const cuerpoDeTabla = document.getElementById('cuerpo-de-tabla')
  let template = ''
  precios5x1.map(function (precio) {
    if (precio.htmlId === id) {
      template += `
        <tr>
          <td>${precio.producto}</th>
          <td>${precio.cantidad}</th>
          <td>${precio.cantidad / 250}</td>
          <td>${parseInt(precio.precio / 1.19)}</td>
          <td>${precio.precio}</td>
        </tr>
      `
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

document.getElementById('boletas-5x1').addEventListener('click', function (event) {
  mostrarResultados5x1(document.getElementById('boletas-5x1').id)
})

document.getElementById('boletas-5x1-aut').addEventListener('click', function (event) {
  mostrarResultados5x1(document.getElementById('boletas-5x1-aut').id)
})

const btnOrientacionV = document.getElementById('orientacion-v')
const btnOrientacionH = document.getElementById('orientacion-h')
const btnMaximo = document.getElementById('maximo')
const btnReset = document.getElementById('reset')

const handleOrientacionV = (e) => {
  e.preventDefault()
  if (validarForma()) {
    const papelAncho = parseFloat(document.getElementById('papel-ancho').value)
    const papelLargo = parseFloat(document.getElementById('papel-largo').value)
    const corteLargo = parseFloat(document.getElementById('corte-largo').value)
    const corteAncho = parseFloat(document.getElementById('corte-ancho').value)
    const micanvas = document.getElementById('micanvas')

    const b = Math.max(papelAncho, papelLargo)
    const h = Math.min(papelAncho, papelLargo)
    const cb = corteAncho
    const ch = corteLargo
    const escala = 250 / b
    let cortes = null
    let sobrante = null
    let totalCortes = null
    let cortesV = null
    let cortesH = null

    clearCanvas()
    micanvas.setAttribute('width', h * escala)
    micanvas.setAttribute('height', b * escala)
    micanvas.setAttribute('style', 'background-color: fff;')

    cortes = acomoda(b, h, 'N', 'V')
    totalCortes = cortes.cortesT
    dibujaCuadricula(cortes.cortesB, cortes.cortesH, cb, ch, 0, 0, escala)
    if (cortes.sobranteB >= ch) {
      sobrante = acomoda(cortes.sobranteB, b, 'H', 'H')
      totalCortes += sobrante.cortesT
      dibujaCuadricula(sobrante.cortesH, sobrante.cortesB, ch, cb, cortes.cortesB * cb * escala, 0, escala, 'R')
    } else if (cortes.sobranteH >= cb) {
      sobrante = acomoda(cortes.sobranteH, h, 'H', 'H')
      totalCortes += sobrante.cortesT
      dibujaCuadricula(sobrante.cortesB, sobrante.cortesH, ch, cb, 0, cortes.cortesH * ch * escala, escala, 'R')
    } else {
      sobrante = {
        cortesT: 0,
        cortesB: 0,
        cortesH: 0,
        sobranteB: 0,
        sobranteH: 0,
        areaUtilizada: 0
      }
    }
    btnOrientacionV.classList.add('disabled')
    btnOrientacionH.classList.remove('disabled')

    if (parseInt(cb) < parseInt(ch)) {
      cortesV = cortes.cortesT
      cortesH = sobrante.cortesT
    } else {
      cortesV = sobrante.cortesT
      cortesH = cortes.cortesT
    }
    // calculando el área
    calcularArea(b, h, cb, ch, totalCortes)
    calcular(b, h, cortesV, cortesH, totalCortes, cortes.cortesT, 'V')
  }
}

const handleOrientacionH = (e) => {
  e.preventDefault()
  if (validarForma()) {
    const papelAncho = parseFloat(document.getElementById('papel-ancho').value)
    const papelLargo = parseFloat(document.getElementById('papel-largo').value)
    const corteLargo = parseFloat(document.getElementById('corte-largo').value)
    const corteAncho = parseFloat(document.getElementById('corte-ancho').value)
    const micanvas = document.getElementById('micanvas')

    const b = Math.max(papelAncho, papelLargo)
    const h = Math.min(papelAncho, papelLargo)
    const cb = corteAncho
    const ch = corteLargo
    const escala = 250 / b

    let cortes = null
    let sobrante = null
    let totalCortes = null
    let cortesV = null
    let cortesH = null

    clearCanvas()
    micanvas.setAttribute('width', b * escala)
    micanvas.setAttribute('height', h * escala)
    micanvas.setAttribute('style', 'background-color: fff;')

    cortes = acomoda(b, h, 'N', 'H')
    totalCortes = cortes.cortesT
    dibujaCuadricula(cortes.cortesB, cortes.cortesH, cb, ch, 0, 0, escala)

    if (cortes.sobranteB >= ch) {
      sobrante = acomoda(cortes.sobranteB, h, 'H', 'H')
      totalCortes += sobrante.cortesT
      dibujaCuadricula(sobrante.cortesH, sobrante.cortesB, ch, cb, cortes.cortesB * cb * escala, 0, escala, 'R')
    } else if (cortes.sobranteH >= cb) {
      sobrante = acomoda(cortes.sobranteH, b, 'H', 'H')
      totalCortes += sobrante.cortesT
      dibujaCuadricula(sobrante.cortesB, sobrante.cortesH, ch, cb, 0, cortes.cortesH * ch * escala, escala, 'R')
    } else {
      sobrante = {
        cortesT: 0,
        cortesB: 0,
        cortesH: 0,
        sobranteB: 0,
        sobranteH: 0,
        areaUtilizada: 0
      }
    }
    btnOrientacionH.classList.add('disabled')
    btnOrientacionV.classList.remove('disabled')
  }
}

btnOrientacionV.addEventListener('click', handleOrientacionV)
btnOrientacionH.addEventListener('click', handleOrientacionH)

const calcular = (b, h, cortesV, cortesH, totalCortes, utilizables, orientacion) => {
  const cortesDeseados = parseInt(document.getElementById('cortes-deseados').value)
  const pliegosP = 1
  let pliegos = 0
  if (orientacion === 'H' || orientacion === 'V') {
    pliegos = Math.ceil(cortesDeseados / utilizables)
  } else {
    pliegos = Math.ceil(cortesDeseados / totalCortes)
  }

  if (pliegos !== 0 && !isNaN(pliegos)) {
    pliegosP = pliegos
  } else if (isNaN(pliegos)) {
    pliegos = 0
  }

  // Calculando el numeto total de cortes en todos los pliegos
  const noTotalCortes = totalCortes * pliegos

  // Imprimiendo resultados
  imprimirResultados(totalCortes, pliegos, noTotalCortes, cortesH, cortesV, utilizables)
}

const calcularArea = (anchoPapel, largoPapel, anchoCorte, largoCorte, cortesEnPliego) => {
  const areaPapel = anchoPapel * largoPapel
  const areaCorte = anchoCorte * largoCorte

  const areaUtilizadaCortes = cortesEnPliego * areaCorte
  const porcentajeAreaUtilizada = (areaUtilizadaCortes * 100 / areaPapel).toFixed(2)
  const porcentajeAreaInutilizada = (100 - porcentajeAreaUtilizada).toFixed(2)

  document.getElementById('area-utilizada').innerText = porcentajeAreaUtilizada
  document.getElementById('area-inutilizada').innerText = porcentajeAreaInutilizada
}

const imprimirResultados = (cortesPliego, pliegos, cortes, cortesH, cortesV, utilizables) => {
  document.getElementById('cortes-pliego').innerText = cortesPliego
  // document.getElementById('cortes-utilizables').innerText = utilizables
  document.getElementById('pliegos').innerText = pliegos
  document.getElementById('numero-cortes').innerText = cortes
  document.getElementById('numero-cortes-vertical').innerText = cortesV
  document.getElementById('numero-cortes-horizontal').innerText = cortesH
}

const dibujaCuadricula = (cortesX, cortesY, width, height, coorX, coorY, escala, color) => {
  if (color === 'R') {
    color = '#d9534f'
  } else {
    color = '#286090'
  }

  const canvas = document.getElementById('micanvas')
  const context = canvas.getContext('2d')
  const coorY1 = coorY
  const coorX1 = coorX

  width = escala * width
  height = escala * height

  for (x = 1; x <= cortesX; x++) {
    coorY = coorY1

    for (y = 1; y <= cortesY; y++) {
      context.beginPath()
      context.fillStyle = color
      context.rect(coorX, coorY, width, height)
      context.fill()
      context.lineWidth = 0.5
      context.strokeStyle = 'white'
      context.stroke()
      coorY = (height * y) + coorY1
    }
    coorX = (width * x) + coorX1
  }
}

const acomoda = (d1, d2, acomodoCorte, acomodoPliego) => {
  const corteAncho = parseFloat(document.getElementById('corte-ancho').value)
  const corteLargo = parseFloat(document.getElementById('corte-largo').value)
  let cb = 1
  let ch = 1
  let b = 1
  let h = 1

  if (acomodoPliego === 'V') {
    b = Math.min(d1, d2)
    h = Math.max(d1, d2)
  } else if (acomodoPliego === 'H') {
    b = Math.max(d1, d2)
    h = Math.min(d1, d2)
  } else {
    b = d1
    h = d2
  }

  if (acomodoCorte === 'V') {
    cb = Math.max(corteAncho, corteLargo)
    ch = Math.min(corteAncho, corteLargo)
  } else if (acomodoCorte === 'H') {
    cb = Math.min(corteAncho, corteLargo)
    ch = Math.max(corteAncho, corteLargo)
  } else {
    cb = corteAncho
    ch = corteLargo
  }

  const cortes = {
    cortesT: (parseInt(b / cb)) * (parseInt(h / ch)),
    cortesB: parseInt(b / cb),
    cortesH: parseInt(h / ch),
    sobranteB: parseFloat((b - (this.cortesB * cb)).toFixed(2)),
    sobranteH: parseFloat((h - (this.cortesH * ch)).toFixed(2)),
    areaUtilizada: parseFloat(((cb * ch) * (parseInt(b / cb)) * (parseInt(h / ch))).toFixed(2))
  }

  return cortes
}

const clearCanvas = () => {
  const canvas = document.getElementById('micanvas')
  const context = canvas.getContext('2d')

  context.clearRect(0, 0, canvas.width, canvas.height)
}

const validarForma = () => {
  const papelAncho = parseFloat(document.getElementById('papel-ancho').value)
  const papelLargo = parseFloat(document.getElementById('papel-largo').value)
  const corteLargo = parseFloat(document.getElementById('corte-largo').value)
  const corteAncho = parseFloat(document.getElementById('corte-ancho').value)

  let valida = true
  if (!papelAncho || !papelLargo || !corteAncho || !corteLargo) {
    valida = false
  }
  return valida
}

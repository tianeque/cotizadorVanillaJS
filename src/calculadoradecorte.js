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

    const b = Math.max(papelAncho, papelLargo)
    const h = Math.min(papelAncho, papelLargo)
    const cb = corteAncho
    const ch = corteLargo
    const escala = 250 / b

    clearCanvas()
  }
}

btnOrientacionV.addEventListener('click', handleOrientacionV)

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

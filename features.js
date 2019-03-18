// Este archivo contiene los manejadores para las características de selección de opciones rápidas contenidas en la parte superrior del formulario

// Tipo Trabajo: Formularios Carta
const optBtnFormularioCarta = document.getElementById('radio-formulario-carta')
optBtnFormularioCarta.addEventListener('click', handleOptFormularioCarta)

function handleOptFormularioCarta () {
  document.getElementById('tipo-trabajo').value = 'Formulario Carta'
  document.getElementById('moldes').value = 1
  document.getElementById('costo-resma').value = 3000
  document.getElementById('hojas-resma').value = 500
}

// Tipo Trabajo: Formularios Media Carta
const optBtnFormularioMediaCarta = document.getElementById('radio-formulario-media-carta')
optBtnFormularioMediaCarta.addEventListener('click', handleOptFormularioMediaCarta)

function handleOptFormularioMediaCarta () {
  document.getElementById('tipo-trabajo').value = 'Formulario Media Carta'
  document.getElementById('moldes').value = 2
  document.getElementById('costo-resma').value = 3000
  document.getElementById('hojas-resma').value = 500
}

// Tipo Trabajo: Formularios Cuarto Carta
const optBtnFormularioCuartoCarta = document.getElementById('radio-formulario-cuarto-carta')
optBtnFormularioCuartoCarta.addEventListener('click', handleOptFormularioCuartoCarta)

function handleOptFormularioCuartoCarta () {
  document.getElementById('tipo-trabajo').value = 'Formulario Cuarto Carta'
  document.getElementById('moldes').value = 4
  document.getElementById('costo-resma').value = 3000
  document.getElementById('hojas-resma').value = 500
}

// Tipo Trabajo: Formularios Oficio
const optBtnFormularioOficio = document.getElementById('radio-formulario-oficio')
optBtnFormularioOficio.addEventListener('click', handleOptFormularioOficio)

function handleOptFormularioOficio () {
  document.getElementById('tipo-trabajo').value = 'Formulario Oficio'
  document.getElementById('moldes').value = 1
  document.getElementById('costo-resma').value = 4000
  document.getElementById('hojas-resma').value = 500
}

// Tipo Trabajo: Formularios Medio Oficio
const optBtnFormularioMedioOficio = document.getElementById('radio-formulario-medio-oficio')
optBtnFormularioMedioOficio.addEventListener('click', handleOptFormularioMedioOficio)

function handleOptFormularioMedioOficio () {
  document.getElementById('tipo-trabajo').value = 'Formulario Medio Oficio'
  document.getElementById('moldes').value = 2
  document.getElementById('costo-resma').value = 4000
  document.getElementById('hojas-resma').value = 500
}

// Tipo Trabajo: Formularios Cuarto Oficio
const optBtnFormularioCuartoOficio = document.getElementById('radio-formulario-cuarto-oficio')
optBtnFormularioCuartoOficio.addEventListener('click', handleOptFormularioCuartoOficio)

function handleOptFormularioCuartoOficio () {
  document.getElementById('tipo-trabajo').value = 'Formulario Cuarto Oficio'
  document.getElementById('moldes').value = 4
  document.getElementById('costo-resma').value = 4000
  document.getElementById('hojas-resma').value = 500
}

const optBtnImprenta = document.getElementById('radio-imprenta')
optBtnImprenta.addEventListener('click', handleOptBtnImprenta)

function handleOptBtnImprenta () {
  document.getElementById('tipo-cliente').value = 'Imprenta'
  document.getElementById('utilidad').value = 20
  document.getElementById('gastos-generales').value = 50
}

const optBtnCliente = document.getElementById('radio-cliente')
optBtnCliente.addEventListener('click', handleOptBtnCliente)

function handleOptBtnCliente () {
  document.getElementById('tipo-cliente').value = 'Cliente'
  document.getElementById('utilidad').value = 50
  document.getElementById('gastos-generales').value = 85
}

// Inicio manejo de multiplicidad
const optBtnSimple = document.getElementById('radio-simple')
optBtnSimple.addEventListener('click', handleOptBtnSimple)

function handleOptBtnSimple () {
  document.getElementById('multiplicidad').value = 1
}

const optBtnDuplicado = document.getElementById('radio-duplicado')
optBtnDuplicado.addEventListener('click', handleOptBtnDuplicado)

function handleOptBtnDuplicado () {
  document.getElementById('multiplicidad').value = 2
}

const optBtnTriplicado = document.getElementById('radio-triplicado')
optBtnTriplicado.addEventListener('click', handleOptBtnTriplicado)

function handleOptBtnTriplicado () {
  document.getElementById('multiplicidad').value = 3
}

const optBtnCuadruplicado = document.getElementById('radio-cuadruplicado')
optBtnCuadruplicado.addEventListener('click', handleOptBtnCuadruplicado)

function handleOptBtnCuadruplicado () {
  document.getElementById('multiplicidad').value = 4
}

const optBtnQuintuplicado = document.getElementById('radio-quintuplicado')
optBtnQuintuplicado.addEventListener('click', handleOptBtnQuintuplicado)

function handleOptBtnQuintuplicado () {
  document.getElementById('multiplicidad').value = 5
}
// Fin manejo de multiplicidad

// Inicio manejo de diseno
const optBtnDiseno1000 = document.getElementById('radio-diseno-1000')
const optBtnDiseno2000 = document.getElementById('radio-diseno-2000')
const optBtnDiseno5000 = document.getElementById('radio-diseno-5000')
const optBtnDiseno10000 = document.getElementById('radio-diseno-10000')

optBtnDiseno1000.addEventListener('click', handleOptDiseno1000)
optBtnDiseno2000.addEventListener('click', handleOptDiseno2000)
optBtnDiseno5000.addEventListener('click', handleOptDiseno5000)
optBtnDiseno10000.addEventListener('click', handleOptDiseno10000)

function handleOptDiseno1000 () {
  document.getElementById('diseno').value = 1000
}
function handleOptDiseno2000 () {
  document.getElementById('diseno').value = 2000
}
function handleOptDiseno5000 () {
  document.getElementById('diseno').value = 5000
}
function handleOptDiseno10000 () {
  document.getElementById('diseno').value = 10000
}
// Fin manejo de diseno
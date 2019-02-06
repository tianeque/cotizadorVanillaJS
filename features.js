// Este archivo contiene los manejadores para las características de selección de opciones rápidas contenidas en la parte superrior del formulario

// Tipo Trabajo: Formularios Carta
const optBtnFormularioCarta = document.getElementById('radio-formulario-carta')
optBtnFormularioCarta.addEventListener('click', handleOptFormularioCarta)

function handleOptFormularioCarta () {
  document.getElementById('tipo-trabajo').value = 'Formulario Carta'
  document.getElementById('moldes').value = 1
  document.getElementById('costo-resma').value = 3000
  mostrarResultados()
}

// Tipo Trabajo: Formularios Media Carta
const optBtnFormularioMediaCarta = document.getElementById('radio-formulario-media-carta')
optBtnFormularioMediaCarta.addEventListener('click', handleOptFormularioMediaCarta)

function handleOptFormularioMediaCarta () {
  document.getElementById('tipo-trabajo').value = 'Formulario Media Carta'
  document.getElementById('moldes').value = 2
  document.getElementById('costo-resma').value = 3000
  mostrarResultados()
}

// Tipo Trabajo: Formularios Cuarto Carta
const optBtnFormularioCuartoCarta = document.getElementById('radio-formulario-cuarto-carta')
optBtnFormularioCuartoCarta.addEventListener('click', handleOptFormularioCuartoCarta)

function handleOptFormularioCuartoCarta () {
  document.getElementById('tipo-trabajo').value = 'Formulario Cuarto Carta'
  document.getElementById('moldes').value = 4
  document.getElementById('costo-resma').value = 3000
  mostrarResultados()
}

// Tipo Trabajo: Formularios Oficio
const optBtnFormularioOficio = document.getElementById('radio-formulario-oficio')
optBtnFormularioOficio.addEventListener('click', handleOptFormularioOficio)

function handleOptFormularioOficio () {
  document.getElementById('tipo-trabajo').value = 'Formulario Oficio'
  document.getElementById('moldes').value = 1
  document.getElementById('costo-resma').value = 4000
  mostrarResultados()
}

// Tipo Trabajo: Formularios Medio Oficio
const optBtnFormularioMedioOficio = document.getElementById('radio-formulario-medio-oficio')
optBtnFormularioMedioOficio.addEventListener('click', handleOptFormularioMedioOficio)

function handleOptFormularioMedioOficio () {
  document.getElementById('tipo-trabajo').value = 'Formulario Medio Oficio'
  document.getElementById('moldes').value = 2
  document.getElementById('costo-resma').value = 4000
  mostrarResultados()
}

// Tipo Trabajo: Formularios Cuarto Oficio
const optBtnFormularioCuartoOficio = document.getElementById('radio-formulario-cuarto-oficio')
optBtnFormularioCuartoOficio.addEventListener('click', handleOptFormularioCuartoOficio)

function handleOptFormularioCuartoOficio () {
  document.getElementById('tipo-trabajo').value = 'Formulario Cuarto Oficio'
  document.getElementById('moldes').value = 4
  document.getElementById('costo-resma').value = 4000
  mostrarResultados()
}

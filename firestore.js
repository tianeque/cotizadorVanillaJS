firebase.initializeApp({
  apiKey: 'AIzaSyAdH9dZJTjKKugwhfhaIERdzkytD2NAXpk',
  authDomain: 'appcotizador.firebaseapp.com"',
  projectId: 'appcotizador'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
var btnGuardar = document.getElementById('guardar')
btnGuardar.addEventListener('click', guardar)

function guardar() {
  db.collection("cotizacion").add({
    nombre,
    tipoTrabajo,
    cantidad,
    moldes,
    multiplicidad,
    sobrantes,
    untal,
    diseno,
    gastosGenerales,
    utilidad,
    impuesto,
    hojasresma,
    costoresma,
    costotinta,
    alzado,
    separado,
    corcheteado,
    corte,
    perforado,
    precioNeto: calculos.precioDeVenta(),
    precioIva: calculos.precioConIVA()
  })
    .then(function (docRef) {
      //console.log("Document written with ID: ", docRef.id);
      document.getElementById('nombre-cliente').value = ''
    })
    .catch(function (error) {
      // console.error("Error adding document: ", error);
    });
}


//leer documentos

var tabla = document.getElementById('tabla')
db.collection('cotizacion').onSnapshot((snapshot) => {
  tabla.innerHTML = ''
  snapshot.forEach((doc) => {
    //console.log(doc.id, '=>', doc.data());
    tabla.innerHTML += ` 
        <tr>
            <th scope="row">${doc.id}</th>
            <td>${doc.data().nombre}</td>
            <td>${doc.data().precioNeto}</td>
            <td>${doc.data().precioIva}</td>
        </tr>`
  });
})

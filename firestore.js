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
        perforado
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}


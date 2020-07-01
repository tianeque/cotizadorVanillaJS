import db from "./firestore";
const btnGuardar = document.getElementById("btn-guardar");

export const guardarCotizacion = async (e) => {
  e.preventDefault();
  let nombre = document.getElementById("nombre-cliente").value;
  let tipoTrabajo = document.getElementById("tipo-trabajo").value;
  let tipoCliente = document.getElementById("tipo-cliente").value;
  let cantidad = document.getElementById("cantidad").value;
  let moldes = document.getElementById("moldes").value;
  let multiplicidad = document.getElementById("multiplicidad").value;
  let sobrantes = document.getElementById("sobrantes").value;
  let untal = parseInt(document.getElementById("untal").value);
  let diseno = parseInt(document.getElementById("diseno").value);
  let gastosGenerales = parseInt(
    document.getElementById("gastos-generales").value
  );
  let utilidad = parseInt(document.getElementById("utilidad").value);
  let impuesto = parseInt(document.getElementById("impuesto").value);
  let hojasresma = document.getElementById("hojas-resma").value;
  let costoresma = document.getElementById("costo-resma").value;
  let costotinta = document.getElementById("costo-tinta").value;
  let alzado = document.getElementById("alzado").checked;
  let separado = document.getElementById("separado").checked;
  let corcheteado = document.getElementById("corcheteado").checked;
  let corte = document.getElementById("corte").checked;
  let perforado = document.getElementById("perforado").checked;
  let data = {
    nombre: nombre,
    tipoTrabajo: tipoTrabajo,
    tipoCliente: tipoCliente,
    cantidad: cantidad,
    moldes: moldes,
    multiplicidad: multiplicidad,
    sobrantes: sobrantes,
    untal: untal,
    diseno: diseno,
    gastosGenerales: gastosGenerales,
    utilidad: utilidad,
    impuesto: impuesto,
    hojasresma: hojasresma,
    costoresma: costoresma,
    costotinta: costotinta,
    alzado: alzado,
    separado: separado,
    corcheteado: corcheteado,
    corte: corte,
    perforado: perforado,
  };

  console.log(data);
  await db
    .collection("cotizacion")
    .doc()
    .set(data)
    .then(function (docRef) {
      // console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      // console.error("Error adding document: ", error);
    });
};

btnGuardar.addEventListener("click", guardarCotizacion);

// // leer documentos

// const tabla = document.getElementById("tabla");
// db.collection("cotizacion").onSnapshot((snapshot) => {
//   tabla.innerHTML = "";
//   snapshot.forEach((doc) => {
//     // console.log(doc.id, '=>', doc.data());
//     tabla.innerHTML += `
//         <tr>
//             <th scope="row">${doc.id}</th>
//             <td>${doc.data().nombre}</td>
//             <td>${doc.data().precioNeto}</td>
//             <td>${doc.data().precioIva}</td>
//         </tr>`;
//   });
// });

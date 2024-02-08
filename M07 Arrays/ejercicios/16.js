function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  // var mesesBuscados = ['Enero', 'Marzo', 'Noviembre'];
  // var mesesEncontrados = [];
  // for (let i = 0; i < array.length; i++) {
  //   var mesActual = array[i];
  //   if (mesesBuscados.includes(mesActual)) {
  //     mesesEncontrados.push(mesActual);
  //   }
  // }
  // if (mesesEncontrados.length === mesesBuscados.length) return mesesEncontrados;
  // else return 'No se encontraron los meses pedidos';


  var tresMeses=[]
  for (let i = 0; i < array.length; i++) {
    if (array[i]==='Enero'|| array[i]==='Marzo'|| array[i]==='Noviembre') {
      tresMeses.push(array[i])
    }
  }
  if (tresMeses.length===3) return tresMeses
  else return 'No se encontraron los meses pedidos'
}

module.exports = mesesDelAño;

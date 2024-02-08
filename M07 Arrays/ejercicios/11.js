function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  // var nuevoArray= []
  // for (let i = 0; i < array.length; i++) {
  //   nuevoArray.push(array[i]*i)
  // }
  // return nuevoArray

  var nuevoArray= array.map(item=>item*array.indexOf(item))
  return nuevoArray
}

module.exports = multiplicarElementosPorIndice;

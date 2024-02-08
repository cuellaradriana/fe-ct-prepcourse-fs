function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var sumatoria=0
  for (let i = 0; i < arrayOfNums.length; i++) {
    sumatoria=sumatoria+arrayOfNums[i]
  }
  return sumatoria
}

module.exports = agregarNumeros;

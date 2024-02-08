function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var sumatoria=0
  for (let i = 0; i < resultadosTest.length; i++) {
    sumatoria=sumatoria+resultadosTest[i]
  }
  var promedio=sumatoria/resultadosTest.length
  return promedio
}

module.exports = promedioResultadosTest;

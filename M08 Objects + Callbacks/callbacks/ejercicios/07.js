function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  var newArray= arrayOfStrings.filter(function (string) {
    // if(string[0]==='a') return string
    if (string.startsWith('a')) return string
  })
  return newArray
}

module.exports = filter;

function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  // var string=array.find((item)=> item.length>=5)
  // return string

  for (let i = 0; i < array.length; i++) {
    if (array[i].length>=5) {
        return array[i]
        break
    }
  }
  return undefined
}

module.exports = obtenerPrimerStringLargo;

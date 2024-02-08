function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:

  //DEVOLVER EL INDICE!

  // var index= array.indexOf(elemento)
  // return index!==-1 ? index : -1

  for (let i = 0; i < array.length; i++) {
    if (array[i]===elemento) return i
  }
  return -1
}

module.exports = encontrarElemento;
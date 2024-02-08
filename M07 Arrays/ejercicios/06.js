function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var arrayDup= array.map(item=> item*2)
  return arrayDup
}

module.exports = duplicarElementos;

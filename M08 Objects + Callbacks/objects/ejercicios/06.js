const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var sumaProp=0
  for (const key in objeto) {
    sumaProp++
  }
  return sumaProp
};

module.exports = contarPropiedades;

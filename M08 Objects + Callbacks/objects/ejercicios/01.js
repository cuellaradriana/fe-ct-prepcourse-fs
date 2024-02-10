const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  var arrayProp=propiedad.split(/[.[\]]+/)
  console.log(arrayProp)
  if (arrayProp.length>=2) console.log(objeto[arrayProp[0]][arrayProp[1]])
  else return objeto[propiedad]
};


module.exports = obtenerValorPropiedad;

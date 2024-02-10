function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  var contraseñaIngresada = password
  return objetoUsuario.password===contraseñaIngresada
}

module.exports = verificarPassword;

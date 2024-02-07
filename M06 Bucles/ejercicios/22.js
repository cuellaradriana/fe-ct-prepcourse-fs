const doWhile = require("./23");

function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:

  switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10: 
    case 12:
      return 31
    case 2:
      return 28
    case 4:
    case 6: 
    case 9:
    case 11:
      return 30
    default:
      return 0
  }

  // var diasDelMes= new Date(2023, mes, 0).getDate()
  // do {
  //   if (mes>0 && mes<13) return diasDelMes
  // } while (mes>0 && mes<13);
  // return 0


}
module.exports = diasEnMes;

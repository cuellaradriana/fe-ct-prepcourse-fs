function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  var arrString1= str1.toLowerCase().replace(/ /g, '').split('').sort()
  var arrString2= str2.toLowerCase().replace(/ /g, '').split('').sort()
  if (arrString1.length!==arrString2.length) return false
  
  for (let i = 0; i< arrString1.length; i++) {
    if (arrString1[i]!==arrString2[i]) return false
  }
  return true
}

console.log(esAnagrama('Hola!', 'Hola!'))

module.exports = esAnagrama;

function dividir(a, b) {
   if (b === 0) {
      return 'No se puede realizar la división. Divisor debe ser distinto de 0.'
   }
   return a / b;   
}

module.exports = dividir;
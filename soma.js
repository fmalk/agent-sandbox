/**
 * Soma dois números.
 *
 * Lança TypeError se algum dos argumentos não for um número válido
 * (tipo diferente de number ou NaN).
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function soma(a, b) {
  if (!ehNumeroValido(a) || !ehNumeroValido(b)) {
    throw new TypeError('soma: os argumentos devem ser números');
  }
  return a + b;
}

function ehNumeroValido(valor) {
  return typeof valor === 'number' && !Number.isNaN(valor);
}

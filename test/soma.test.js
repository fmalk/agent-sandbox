import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { soma } from '../soma.js';

describe('soma', () => {
  test('soma dois inteiros positivos', () => {
    assert.equal(soma(2, 3), 5);
  });

  test('soma números negativos e zero', () => {
    assert.equal(soma(-4, 4), 0);
    assert.equal(soma(0, 0), 0);
    assert.equal(soma(-2, -3), -5);
  });

  test('soma números decimais', () => {
    assert.equal(soma(0.5, 0.25), 0.75);
  });

  test('aceita Infinity como número', () => {
    assert.equal(soma(Infinity, 1), Infinity);
  });

  test('lança TypeError quando o primeiro argumento não é número', () => {
    assert.throws(() => soma('1', 2), TypeError);
  });

  test('lança TypeError quando o segundo argumento não é número', () => {
    assert.throws(() => soma(1, '2'), TypeError);
  });

  test('lança TypeError para null, undefined e objetos', () => {
    assert.throws(() => soma(null, 1), TypeError);
    assert.throws(() => soma(1, undefined), TypeError);
    assert.throws(() => soma({}, 1), TypeError);
    assert.throws(() => soma([1], 1), TypeError);
  });

  test('lança TypeError quando algum argumento é NaN', () => {
    assert.throws(() => soma(NaN, 1), TypeError);
    assert.throws(() => soma(1, NaN), TypeError);
  });

  test('lança TypeError quando não há argumentos', () => {
    assert.throws(() => soma(), TypeError);
  });
});

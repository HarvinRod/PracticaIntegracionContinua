const holaMundo = require('./hola_mundo');

test('La función holaMundo imprime correctamente', () => {
  expect(holaMundo()).toBe("¡Hola Mundo!");
});

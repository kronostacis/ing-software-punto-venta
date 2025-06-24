// cypress/e2e/home.cy.js

describe('Página de inicio', () => {
  it('debería mostrar el título principal', () => {
    cy.visit('/') // Esto va al localhost:3000 si tu baseUrl está bien configurado
    cy.contains('Bienvenido') // Cambia 'Bienvenido' por el texto real que esperas ver
  })
})
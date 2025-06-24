// cypress/support/component.js

import { mount } from 'cypress/react18'

// Hace disponible `cy.mount()` en tus pruebas
Cypress.Commands.add('mount', mount)

// Opcional: estilos globales
import '../../styles/globals.css'
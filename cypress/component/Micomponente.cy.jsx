import React from 'react'
import { MiComponente } from '../../components/MiComponente'

describe('MiComponente', () => {
  it('se renderiza correctamente', () => {
    cy.mount(<MiComponente />)
    cy.contains('Texto esperado')
  })
})
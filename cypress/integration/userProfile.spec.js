describe('user can visit profile page', () => {
  it('visits recipe details from his created recipe page and returns', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.get('.profile-button').click()
    cy.get('.Porridge').click()
    cy.get('.instructions-selector').click()
    cy.get('.ingredients-selector').click()
    cy.get('.return').click()
  })

  it('changes detail information', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.get('.profile-button').click()
    cy.get('.profile-user-details').click()
    cy.get('.edit-button').click()
    cy.get('.input-international').clear()
    cy.get('.input-international').type('mexican')
    cy.get('.save-button').click()
    cy.get('.edit-button').click()
    cy.get('.input-international').clear()
    cy.get('.input-international').type('italian')
    cy.get('.save-button').click()
    cy.get('.edit-button').click()
    cy.get('.input-international').clear()
    cy.get('.input-international').type('mexican')
    cy.get('.cancel-button').click()
    cy.get('.user-input').should('contain', 'italian')
  })
})

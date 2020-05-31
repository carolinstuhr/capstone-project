describe('user can add recipes to his favourites and remove them', () => {
  it('adds recipe to favourites', () => {
    cy.visit('/')
    cy.wait(2000)

    cy.get('.recipe20').click()
    cy.get('.heart-icon').click()
    cy.get('.return').click()
    cy.get('.favourite-recipes').click()
    cy.get('.recipe4').should('be.visible')
  })
  it('removes recipe from favourites', () => {
    cy.visit('/')
    cy.wait(2000)

    cy.get('.recipe20').click()
    cy.get('.heart-icon').click()
    cy.get('.return').click()
    cy.get('.favourite-recipes').click()
    cy.get('.recipe5').should('not.be.visible')
  })
})

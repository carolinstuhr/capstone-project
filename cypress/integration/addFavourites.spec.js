describe('user can add recipes to his favourites and remove them', () => {
  it('user can add recipe to favourites', () => {
    cy.visit('/')
    cy.wait(2000)

    cy.get('.recipe20').click()
    cy.get('.heart-icon').click()
    cy.get('.return-all').click()
    cy.get('.favourite-recipes').click()
    cy.get('.recipe3').should('be.visible')
  })
  it('user can remove recipe from favourites', () => {
    cy.visit('/')
    cy.wait(2000)

    cy.get('.recipe20').click()
    cy.get('.heart-icon').click()
    cy.get('.return-all').click()
    cy.get('.favourite-recipes').click()
    cy.get('.recipe3').should('not.be.visible')
  })
})

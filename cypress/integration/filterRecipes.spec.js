describe('user can filter recipes', () => {
  it('filters recipes on all recipes page', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.get('.recipes-filter').type('breakfast')
    cy.get('.Porridge').should('be.visible')
  })

  it('will show no recipes found when no matches are found', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.get('.recipes-filter').type('hdhd')
    cy.get('.fallback-all').should('be.visible')
  })

  it('filters recipes on favourites recipes page', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.get('.favourite-recipes').click()
    cy.get('.recipes-filter').type('italian')
    cy.get('.Ravioli').should('be.visible')
  })
})

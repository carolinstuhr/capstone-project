describe('user can enter new recipe', () => {
  it('enters details into form and add additional lines', () => {
    cy.visit('/')
    cy.wait(2000)

    cy.get('.create-recipe-button').click()
    cy.get('.create-title').type('New Recipe Test')
    cy.get('.create_tags').type('yummy, yummy, yummy')
    cy.get('.create-serving').type('2')
    cy.get('.create-timehour').type('1')
    cy.get('.create-timeminutes').type('2')
    cy.get('.create-ingredientsamount0').type('1 cup')
    cy.get('.create-ingredientsname0').type('water')
    cy.get('.additional-ingredient-line').click()
    cy.get('.create-ingredientsamount1').type('500 g')
    cy.get('.create-ingredientsname1').type('flour')
    cy.get('.create-instructions0').type('Mix it all together')
    cy.get('.additional-instructions-line').click()
    cy.get('.create-instructions1').type('Bake it at 200 degrees')
  })
})

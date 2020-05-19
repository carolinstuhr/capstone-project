describe('user can enter new recipe', () => {
  it('after submit user should be redirected to homepage', () => {
    cy.visit('/create')
    // cy.get('.signin_email').type('stuhr.carolin@googlemail.com')
    // cy.get('.signin_password').type('Test123')
    // cy.get('.signin_form').submit()
    // cy.get('.create_recipe_button')
    cy.get('.create_title').type('New Recipe Test')
    cy.get('.create_tags0').type('yummy')
    cy.get('.create_tags1').type('yummy')
    cy.get('.create_tags2').type('yummy')
    cy.get('.create_serving').type('2')
    cy.get('.create_timehour').type('1')
    cy.get('.create_timeminutes').type('2')
    cy.get('.create_ingredientsamount0').type('1 cup')
    cy.get('.create_ingredientsname0').type('water')
    cy.get('.create_instructions0').type('Mix it all together')
  })
})
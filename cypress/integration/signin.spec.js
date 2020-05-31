describe('registered user should be logged in after entering the details and submitting', () => {
  it('it redirects to the homepage after signin', () => {
    cy.visit('/signin')
    cy.wait(2000)
    cy.get('.signin_email').type('stuhr.carolin@googlemail.com')
    cy.get('.signin_password').type('Test123')
    cy.get('.signin_form').submit()
  })
})

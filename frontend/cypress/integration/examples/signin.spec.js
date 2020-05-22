describe('registered user should be logged in after entering the details and submitting', () => {
  it('the user gets redirected to the homepage', () => {
    cy.visit('/signin')
    cy.get('.signin_email').type('stuhr.carolin@googlemail.com')
    cy.get('.signin_password').type('Test123')
    cy.get('.signin_form').submit()
  })
})

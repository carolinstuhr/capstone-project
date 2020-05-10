import React from 'react'
import styled from 'styled-components/macro'

export default function IngredientsSection({ ingredientsNumber, storeInput }) {
  return (
    <>
      {ingredientsNumber < 1 || (
        <section>
          <IngredientsAmountInput
            type="text"
            id="ingredients"
            onChange={storeInput}
            name="ingredientsamount1"
            maxLength="12"
            placeholder="amount"
          />
          <IngredientsNameInput
            type="text"
            id="ingredients"
            onChange={storeInput}
            name="ingredientsname1"
            minLength="1"
            maxLength="30"
            placeholder="ingredient"
          />
        </section>
      )}
      {ingredientsNumber < 2 || (
        <section>
          <IngredientsAmountInput
            type="text"
            id="ingredients"
            onChange={storeInput}
            name="ingredientsamount2"
            maxLength="12"
            placeholder="amount"
          />
          <IngredientsNameInput
            type="text"
            id="ingredients"
            onChange={storeInput}
            name="ingredientsname2"
            minLength="1"
            maxLength="30"
            placeholder="ingredient"
          />
        </section>
      )}
      {ingredientsNumber < 3 || (
        <section>
          <IngredientsAmountInput
            type="text"
            id="ingredients"
            onChange={storeInput}
            name="ingredientsamount3"
            maxLength="12"
            placeholder="amount"
          />
          <IngredientsNameInput
            type="text"
            id="ingredients"
            onChange={storeInput}
            name="ingredientsname3"
            minLength="1"
            maxLength="30"
            placeholder="ingredient"
          />
        </section>
      )}
      {ingredientsNumber < 4 || (
        <section>
          <IngredientsAmountInput
            type="text"
            id="ingredients"
            onChange={storeInput}
            name="ingredientsamount4"
            maxLength="12"
            placeholder="amount"
          />
          <IngredientsNameInput
            type="text"
            id="ingredients"
            onChange={storeInput}
            name="ingredientsname4"
            minLength="1"
            maxLength="30"
            placeholder="ingredient"
          />
        </section>
      )}
    </>
  )
}
const InputStyled = styled.input`
  font-weight: 200;
  font-size: 14px;
  padding-left: 4px;
  border-radius: 4px;
  border: 1px solid #a09e9a;
  color: #514f4b;
  font-family: 'Josefin Sans', sans-serif;
  background: #f2efe9;
  ::placeholder {
    font-style: italic;
    color: #a09e9a;
  }
`

const IngredientsAmountInput = styled(InputStyled)`
  width: 60px;
  height: 28px;
  margin-top: 4px;
  margin-right: 4px;
  margin-bottom: 8px;
`
const IngredientsNameInput = styled(InputStyled)`
  width: 250px;
  height: 28px;
  margin-bottom: 8px;
`

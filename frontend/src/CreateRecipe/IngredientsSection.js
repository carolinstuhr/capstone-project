import React from 'react'
import styled from 'styled-components/macro'

export default function IngredientsSection({
  storeInput,
  ingredientsNumber,
  formData,
}) {
  return (
    <section>
      <IngredientsAmountInput
        type="text"
        id="ingredients"
        onChange={storeInput}
        name={`ingredientsamount${ingredientsNumber}`}
        maxLength="12"
        placeholder="amount"
      />
      <IngredientsNameInput
        type="text"
        id="ingredients"
        onChange={storeInput}
        name={`ingredientsname${ingredientsNumber}`}
        minLength="1"
        maxLength="30"
        placeholder="ingredient"
      />
    </section>
  )
}
const InputStyled = styled.input`
  font-weight: 200;
  font-size: 14px;
  padding-left: 4px;
  border-radius: 4px;
  border: 1px solid #a09e9a;
  font-family: 'Josefin Sans', sans-serif;
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

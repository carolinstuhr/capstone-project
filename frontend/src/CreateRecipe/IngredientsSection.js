import React from 'react'
import styled from 'styled-components/macro'

export default function IngredientsSection({ storeInput, ingredientsNumber }) {
  return (
    <IngredientsPart>
      <IngredientsAmountInput
        type="text"
        id="ingredients"
        onChange={storeInput}
        name={`ingredientsamount${ingredientsNumber}`}
      />
      <IngredientsNameInput
        type="text"
        id="ingredients"
        onChange={storeInput}
        name={`ingredientsname${ingredientsNumber}`}
      />
    </IngredientsPart>
  )
}
const InputStyled = styled.input`
  font-weight: 200;
  font-size: 14px;
  padding-left: 4px;
  border-radius: 4px;
  border: 1px solid #a09e9a;
`
const IngredientsPart = styled.section`
  margin-bottom: 22px;
  margin-top: 4px;
`
const IngredientsAmountInput = styled(InputStyled)`
  width: 40px;
  height: 28px;
  margin-top: 4px;
  margin-right: 4px;
  margin-bottom: 8px;
`
const IngredientsNameInput = styled(InputStyled)`
  width: 270px;
  height: 28px;
  margin-bottom: 8px;
`

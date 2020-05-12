import React, { useEffect, useRef } from 'react'
import styled from 'styled-components/macro'

export default function IngredientsSection({
  ingredientsNumber,
  storeInput,
  formData,
}) {
  const ingredientsRef = useRef()

  useEffect(() => {
    ingredientsRef.current.focus()
  }, [ingredientsNumber])

  let ingredients = []
  for (let i = 0; i < 20; i++) {
    if (i === 0) {
      ingredients.push(
        <section>
          <IngredientsAmountInput
            type="text"
            id="ingredients"
            onChange={storeInput}
            name={`ingredientsamount${i + 1}`}
            maxLength="7"
            placeholder="amount"
            ref={ingredientsRef}
            value={formData[`ingredientsamount${i + 1}`]}
          />
          <IngredientsNameInput
            type="text"
            id="ingredients"
            onChange={storeInput}
            name={`ingredientsname${i + 1}`}
            minLength="1"
            maxLength="30"
            placeholder="ingredient"
            value={formData[`ingredientsname${i + 1}`]}
            required
          />
        </section>
      )
    } else {
      ingredients.push(
        <section>
          <IngredientsAmountInput
            type="text"
            id="ingredients"
            onChange={storeInput}
            name={`ingredientsamount${i + 1}`}
            maxLength="12"
            placeholder="amount"
            ref={ingredientsRef}
            value={formData[`ingredientsamount${i + 1}`]}
          />
          <IngredientsNameInput
            type="text"
            id="ingredients"
            onChange={storeInput}
            name={`ingredientsname${i + 1}`}
            minLength="1"
            maxLength="30"
            placeholder="ingredient"
            value={formData[`ingredientsname${i + 1}`]}
          />
        </section>
      )
    }
  }

  return (
    <>
      {ingredientsNumber === 1 &&
        ingredients.slice(0, 1).map((ingredient) => ingredient)}
      {ingredientsNumber === 2 &&
        ingredients.slice(0, 2).map((ingredient) => ingredient)}
      {ingredientsNumber === 3 &&
        ingredients.slice(0, 3).map((ingredient) => ingredient)}
      {ingredientsNumber === 4 &&
        ingredients.slice(0, 4).map((ingredient) => ingredient)}
      {ingredientsNumber === 5 &&
        ingredients.slice(0, 5).map((ingredient) => ingredient)}
      {ingredientsNumber === 6 &&
        ingredients.slice(0, 6).map((ingredient) => ingredient)}
      {ingredientsNumber === 7 &&
        ingredients.slice(0, 7).map((ingredient) => ingredient)}
      {ingredientsNumber === 8 &&
        ingredients.slice(0, 8).map((ingredient) => ingredient)}
      {ingredientsNumber === 9 &&
        ingredients.slice(0, 9).map((ingredient) => ingredient)}
      {ingredientsNumber === 10 &&
        ingredients.slice(0, 10).map((ingredient) => ingredient)}
      {ingredientsNumber === 11 &&
        ingredients.slice(0, 11).map((ingredient) => ingredient)}
      {ingredientsNumber === 12 &&
        ingredients.slice(0, 12).map((ingredient) => ingredient)}
      {ingredientsNumber === 13 &&
        ingredients.slice(0, 13).map((ingredient) => ingredient)}
      {ingredientsNumber === 14 &&
        ingredients.slice(0, 14).map((ingredient) => ingredient)}
      {ingredientsNumber === 15 &&
        ingredients.slice(0, 15).map((ingredient) => ingredient)}
      {ingredientsNumber === 16 &&
        ingredients.slice(0, 16).map((ingredient) => ingredient)}
      {ingredientsNumber === 17 &&
        ingredients.slice(0, 17).map((ingredient) => ingredient)}
      {ingredientsNumber === 18 &&
        ingredients.slice(0, 18).map((ingredient) => ingredient)}
      {ingredientsNumber === 19 &&
        ingredients.slice(0, 19).map((ingredient) => ingredient)}
      {ingredientsNumber === 20 &&
        ingredients.slice(0, 20).map((ingredient) => ingredient)}
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

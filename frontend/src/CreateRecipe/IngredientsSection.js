import React, { useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import AdditionalLineButton from './AdditionalLineButton'

export default function IngredientsSection({ ingredients, setIngredients }) {
  const ingredientsRef = useRef()

  useEffect(() => {
    if (ingredients.length > 0) {
      ingredientsRef.current.focus()
    }
  }, [ingredients.length])

  return (
    <>
      {ingredients.map((ingredient, index) => (
        <section key={index}>
          <IngredientsAmountInput
            type="text"
            id="ingredients"
            onChange={storeInput(index)}
            name="amount"
            maxLength="7"
            placeholder="amount"
            ref={ingredientsRef}
            value={ingredient.amount}
          />
          <IngredientsNameInput
            type="text"
            id="ingredients"
            onChange={storeInput(index)}
            name="name"
            minLength="1"
            maxLength="30"
            placeholder="ingredient"
            value={ingredient.name}
            required
          />
        </section>
      ))}
      <AdditionalLineButton addAdditionalLine={addIngredientsLine} />
    </>
  )
  function storeInput(index) {
    return (event) => {
      const input = event.target
      setIngredients([
        ...ingredients.slice(0, index),
        { ...ingredients[index], [input.name]: input.value },
        ...ingredients.slice(index + 1),
      ])
    }
  }

  function addIngredientsLine() {
    setIngredients([...ingredients, { amount: '', name: '' }])
  }
}
const InputStyled = styled.input`
  font-weight: 200;
  font-size: 14px;
  padding-left: 4px;
  border-radius: 4px;
  border: 1px solid #a09e9a;
  color: #514f4b;
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

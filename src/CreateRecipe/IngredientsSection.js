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
            className={`create_ingredientsamount${index}`}
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
            className={`create_ingredientsname${index}`}
          />
        </section>
      ))}
      <AdditionalLineButton onClick={addIngredientsLine} />
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
  border: 1px solid var(--tertiary);
  color: var(--primary);
  font-family: 'Josefin Sans', sans-serif;
  background: var(--input-background);
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

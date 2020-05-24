import React from 'react'
import styled from 'styled-components/macro'

export default function TagSection({ tags, setTags }) {
  const placeholder = ['e.g. quick', 'e.g. easy', 'e.g. healthy']
  return (
    <>
      {tags.map((tag, index) => (
        <TagsInput
          type="text"
          id="tags"
          onChange={storeInput(index)}
          name="tag"
          value={tag}
          minLength="2"
          maxLength="10"
          data-testid="tag"
          placeholder={placeholder[index]}
          className={`create_tags${index}`}
        />
      ))}
    </>
  )
  function storeInput(index) {
    return (event) => {
      const input = event.target
      setTags([...tags.slice(0, index), input.value, ...tags.slice(index + 1)])
    }
  }
}
const TagsInput = styled.input`
  font-size: 14px;
  padding-left: 4px;
  color: var(--primary);
  background: var(--input-background);
  ::placeholder {
    font-style: italic;
    color: var(--tertiary);
  }
  display: block;
  width: 200px;
  height: 28px;
  margin-bottom: 4px;
  margin-top: 4px;
`

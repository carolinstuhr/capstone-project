import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { TiDelete } from 'react-icons/ti'

export default function Tags({ tags, setTags }) {
  const [tag, setTag] = useState('')

  return (
    <TagWrapper>
      <ListStyled>
        {tags &&
          tags.map((tag, index) => (
            <TagItem key={index}>
              {tag}
              <DeleteTag onClick={() => deleteTag(index)} />
            </TagItem>
          ))}
        {tags.length < 3 && (
          <InputItem>
            <TagsInput
              type="text"
              id="tags"
              onChange={storeInput}
              name="tag"
              value={tag}
              minLength="2"
              maxLength="10"
              data-testid="tag"
              placeholder="e.g. easy"
            />
          </InputItem>
        )}
      </ListStyled>
    </TagWrapper>
  )
  function storeInput(event) {
    if (event.target.value.endsWith(',')) {
      setTags([...tags, tag])
      setTag('')
      console.log(tag)
      console.log(tags)
    } else {
      setTag(event.target.value)
      console.log(tag)
      console.log(tags)
    }
  }
  function deleteTag(index) {
    setTags([...tags.slice(0, index), ...tags.slice(index + 1)])
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
  height: 34px;
  padding-bottom: 4px;
  padding-top: 4px;
  border: none;
  width: 100%;
  align-self: center;
`
const DeleteTag = styled(TiDelete)`
  height: 16px;
  width: 16px;
  align-self: center;
`
const ListStyled = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`
const TagWrapper = styled.section`
  border: 1px solid var(--tertiary);
  border-radius: 4px;
  background: var(--input-background);
  width: 250px;
  height: 34px;
`

const InputItem = styled.li`
  width: 100%;
`
const TagItem = styled.li`
  align-self: center;
  display: flex;
  margin-left: 4px;
  margin-bottom: 2px;
  background: var(--tertiary);
  color: var(--primary-background);
  padding: 4px;
  border-radius: 4px;
  font-weight: 200;
  font-size: 14px;
`

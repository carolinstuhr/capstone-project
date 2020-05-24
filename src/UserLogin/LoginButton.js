import styled from 'styled-components/macro'

export default styled.button`
  grid-column: 1 / 3;
  width: 80px;
  padding: 4px;
  justify-self: center;
  margin-top: 18px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 300;
  background: ${(props) =>
    props.isButtonDisabled ? 'rgba(255, 255, 255, 0.7)' : 'white'};
`

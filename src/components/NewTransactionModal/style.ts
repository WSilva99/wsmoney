import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: .25rem;
    border: 1px solid var(--text-body);
    background: var(--shape);
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: var(--shape);
    border-radius: .25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;
    transition: filter .2s ease-in-out;

    &:hover {
      filter: brightness(.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'red' | 'green';
}

const colors = {
  red: '#e52e4d',
  green: '#33cc95'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid var(--text-body);
  border-radius: .25rem;
  /* background: ${(props) => props.isActive ? colors[props.activeColor] : 'transparent'}; */
  background: ${(props) => props.isActive ? `var(--${props.activeColor})` : 'transparent'};
  color: ${(props) => props.isActive ? 'var(--shape)' : 'var(--text-title)'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: border-color .2s ease-in-out;

  &:hover {
    border-color: var(--text-title);
  }

  i {
    font-size: 1.5rem;
  }

  span {
    display: inline-block;
    font-weight: 600;
  }
`;
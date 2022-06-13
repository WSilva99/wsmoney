import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--shape);
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: .25rem;
    height: 3rem;
    transition: filter .2s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  color: var(--shape);

  i {
    font-size: 2rem;
  }
`;
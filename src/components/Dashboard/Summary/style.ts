import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -6rem;

  div {
    background: var(--shape);
    color: var(--text-title);
    padding: 1.5rem 2rem;
    border-radius: .25rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.background-highlight-green {
      background: var(--green);
      color: var(--shape);
    }
    
    &.background-highlight-red {
      background: var(--red);
      color: var(--shape);
    }
  }
`;
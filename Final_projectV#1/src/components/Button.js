import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 1.4rem;
  background: transparent;
  border-radius: 5px;
  border: 0.2rem solid var(--mainYellow);
  padding: 0.5rem;
  margin: 0.5rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: "var(--mainYellow)";
  }
`;

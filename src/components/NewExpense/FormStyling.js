import styled from "styled-components";

export const NewExpenseParent = styled.div`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

export const NewExpenseButton = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid #40005d;
  background-color: #40005d;
  color: white;
  border-radius: 12px;
  margin-right: 1rem;
  &:hover,
  &:active {
    background-color: #510674;
    border-color: #510674;
  }
`;

export const NewExpenseControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

export const NewExpenseLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`;

export const NewExpenseInput = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
`;

export const NewExpenseAction = styled.div`
  text-align: right;
`;

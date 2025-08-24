import styled from 'styled-components';

export const Button = styled.button<{ $secondary?: boolean }>`
  max-width: 150px;
  font-size: 1rem;
  font-weight: 600;
  padding: 8px 12px;
  border: none;
  border-radius: 10px;
  background: #285d75;
  color: #eaeaea;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background: #ebf9ffff;
    color: #133a4dff;
    transition: 1s;
  }
  ${(props) =>
    props.$secondary
      ? `background: #2c701a; color: #ffffef;
   &:hover {
    background: #ffffef;
    color: #2c701a;
    transition: 1s;
  }`
      : ''}
`;

import styled from 'styled-components';

const Button = styled.button`
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
`;

export default Button;

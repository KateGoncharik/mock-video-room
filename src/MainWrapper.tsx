import styled from 'styled-components';
import type { ReactNode } from 'react';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10%;
`;

export const MainWrapper = ({ children }: { children: ReactNode }) => {
  return <Main>{children}</Main>;
};

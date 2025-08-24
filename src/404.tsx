import { useNavigate } from 'react-router-dom';
import Button from './components/Button';
import { MainWrapper } from './components/MainWrapper';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <MainWrapper>
      <h1>404</h1>
      <Button
        onClick={() => {
          navigate('/');
        }}
      >
        Go back to main
      </Button>
    </MainWrapper>
  );
};

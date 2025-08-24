import { useNavigate } from 'react-router-dom';
import { Button } from './components/Button';
import { MainWrapper } from './components/MainWrapper';

export const Room = () => {
  const navigate = useNavigate();
  return (
    <MainWrapper>
      <Button
        onClick={() => {
          navigate('/');
        }}
      >
        Home
      </Button>
    </MainWrapper>
  );
};

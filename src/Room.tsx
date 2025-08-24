import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { MainWrapper } from './MainWrapper';

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

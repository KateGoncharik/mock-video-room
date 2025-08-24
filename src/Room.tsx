import { useNavigate } from 'react-router-dom';

export const Room = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate('/');
      }}
    >
      Home
    </button>
  );
};

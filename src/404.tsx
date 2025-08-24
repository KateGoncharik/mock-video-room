import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>404</h1>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Go back to main
      </button>
    </>
  );
};

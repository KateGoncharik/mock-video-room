import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTasks, type Task } from './api';

export const App = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Array<Task>>([]);

  useEffect(() => {
    fetchTasks().then((res) => {
      setTasks(res);
    });
  }, []);

  return (
    <>
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <div>Id:{task.id}</div>
          <div>Title:{task.title}</div>
          <div>Status:{task.completed}</div>
          <button
            onClick={() => {
              navigate(`/room/${task.id}`);
            }}
          >
            To mock video room
          </button>
        </div>
      ))}
    </>
  );
};

export default App;

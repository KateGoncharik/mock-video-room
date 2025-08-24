import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTasks, type Task } from './api';
import Button from './Button';
import styled from 'styled-components';
import { MainWrapper } from './MainWrapper';

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const App = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Array<Task>>([]);

  useEffect(() => {
    fetchTasks().then((res) => {
      setTasks(res);
    });
  }, []);

  return (
    <MainWrapper>
      <h1>Tasks</h1>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <div>Id:{task.id}</div>
            <div>Title:{task.title}</div>
            <div>Status:{task.completed}</div>
            <Button
              onClick={() => {
                navigate(`/room/${task.id}`);
              }}
            >
              To mock video room
            </Button>
          </TaskItem>
        ))}
      </TaskList>
    </MainWrapper>
  );
};

export default App;

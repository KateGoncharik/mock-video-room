import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTasks, type Task } from './api/tasks';
import { Button } from './components/Button';
import styled from 'styled-components';
import { MainWrapper } from './components/MainWrapper';

const MainHeader = styled.h1`
  margin: 10px 20px 20px 0;
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const TaskItem = styled.div`
  min-width: 300px;
  padding: 12px 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
  background-color: #ffffff;
`;

const TaskHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const TaskTitle = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
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
      <MainHeader>Tasks</MainHeader>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <TaskHeader>
              <Box>
                <TaskTitle>{task.title}</TaskTitle>
                <p># {task.id}</p>
              </Box>
              <div>{task.completed ? 'Completed' : 'To be done'}</div>
            </TaskHeader>

            <Button
              onClick={() => {
                navigate(`/room/${task.id}`);
              }}
            >
              To video room
            </Button>
          </TaskItem>
        ))}
      </TaskList>
    </MainWrapper>
  );
};

export default App;

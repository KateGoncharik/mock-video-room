export type Task = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const fetchTasks = async (limit = 15): Promise<Task[]> => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=' + limit
  );
  if (!res.ok) {
    throw new Error('Failed to load tasks');
  }
  return res.json();
};

export const fetchTask = async (id: number): Promise<Task> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + id);
  if (!res.ok) {
    throw new Error('Task not found');
  }
  return res.json();
};

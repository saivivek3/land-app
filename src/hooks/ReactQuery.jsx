import { useQuery } from '@tanstack/react-query';

const fetchTodos = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=5',
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Todos = () => {
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  if (isLoading) return <div>Loading todos...</div>;
  if (error) return <div>Error fetching todos: {error.message}</div>;

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} -{' '}
            <strong>{todo.completed ? '✅ Done' : '⏳ Pending'}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

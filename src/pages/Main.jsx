import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  const queryClient = useQueryClient();
  const [todoItem, setTodoItem] = useState('');
  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:4000/todos');
    return response.data;
  };
  const {
    data: todos,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    select: (todos) => {
      return todos.map((todo) => {
        return { ...todo, test: 1 };
      });
    },
  });

  const addTodo = async (newTodo) => {
    await axios.post('http://localhost:4000/todos', newTodo);
  };
  const { mutate } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      alert('데이터 삽입 성공했습니다.');
      queryClient.invalidateQueries(['todos']);
    },
  });
  if (isPending) {
    return <div>로딩중입니다...</div>;
  }
  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

  return (
    <div>
      <h3>TanStack Query</h3>
      <Link to={'/empty'}>
        <button>Empty Page</button>
      </Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTodoObj = { title: todoItem, isDone: false };
          mutate(newTodoObj);
        }}
      >
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button>추가</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'aliceblue',
              }}
            >
              <h4>{todo.title}</h4>
              <p>{todo.isDone ? 'Done' : 'Not Done'}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Main;

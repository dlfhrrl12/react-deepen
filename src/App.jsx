import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState(null);
  const [todo, setTodo] = useState({
    title: '',
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios('http://localhost:4000/todos');
        setTodos(data);
      } catch (error) {
        console.error('Error => ', error);
      }
    };

    fetchPost();
  }, []);
  console.log('todos', todos);

  const onSubmitHandler = async (todo) => {
    await axios.post('http://localhost:4000/todos', todo);
  };
  return (
    <>
      <div>
        <h3>axios 연습 </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitHandler(todo);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              setTodo({ ...todo, title: e.target.value });
            }}
          />
          <button type="submit">추가하기</button>
        </form>
      </div>
    </>
  );
}

export default App;

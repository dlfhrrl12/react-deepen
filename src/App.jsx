import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos/1'
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error! => ', error);
      }
    };

    fetchPost();
  }, []);
  console.log('post', post);
  return (
    <>
      <h3>async / await 연습</h3>
      {post ? <div>{post.title}</div> : <div>Loading...</div>}
    </>
  );
}

export default App;

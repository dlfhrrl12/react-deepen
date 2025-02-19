import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) =>
        response.json()
      ),
      fetch('https://jsonplaceholder.typicode.com/todos/2').then((response) =>
        response.json()
      ),
    ]).then(([response1, response2]) => {
      console.log('response =>', response1);
      console.log('response =>', response2);
    });
  }, []);
  return (
    <>
      <div></div>
    </>
  );
}

export default App;

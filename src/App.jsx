import { useEffect } from 'react';
// import { useState } from 'react';

function App() {
  // const [message, setMessage] = useState('타이머 시작');

  useEffect(() => {
    /* const delay = function (ms) {
       const promise = new Promise((resolve) => {
         setTimeout(resolve, ms);
       });
       return promise;
     };
     delay(2000).then(() => {
       setMessage('2초 후 메세지가 변경됐습니다.');
   });*/
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return <>{/* <h1>{message}</h1> */}</>;
}

export default App;

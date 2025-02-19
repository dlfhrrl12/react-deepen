import axios from 'axios';
import { useEffect, useState } from 'react';
import api from './axios/api';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await api.get('/todos');
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error : {error.message}</div>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.isDone ? 'Done' : 'Not Done'}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;

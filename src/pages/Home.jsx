import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  let timerId = null;

  const throttling = (delay) => {
    if (timerId) {
      return;
    }
    console.log(`API요청 실행! ${delay}ms 동안 추가요청 안반음`);

    timerId = setTimeout(() => {
      console.log(`${delay}ms 지남 추가 요청 받음!`);
      timerId = null;
    }, delay);
  };

  const debounce = (delay) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      console.log(`마지막 요청으로부터 ${delay}ms 지났으므로 API 요청 실행`);
      timerId = null;
    }, delay);
  };

  const handleMove = () => {
    navigate('/company');
  };

  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, []);
  return (
    <div>
      <h2>Button 이벤트 예제</h2>
      <button onClick={() => throttling(2000)}>쓰로틀링 버튼</button>
      <button onClick={() => debounce(2000)}>디바운싱 버튼</button>
      <div>
        <button onClick={handleMove}>페이지 이동</button>
      </div>
    </div>
  );
};

export default Home;

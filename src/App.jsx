import useBearsStore from './zustand/bearsStore';

function App() {
  // const bears = useBearsStore((state) => {
  //   return state.bears;
  // });
  // const increase = useBearsStore((state) => {
  //   return state.increase;
  // });

  const { bears, increase, init } = useBearsStore((state) => state);

  return (
    <>
      <div>
        <h2>Zustand</h2>
        <h4>{bears}</h4>
        <button onClick={increase}>+1</button>
        <button onClick={init}>초기화</button>
      </div>
    </>
  );
}

export default App;

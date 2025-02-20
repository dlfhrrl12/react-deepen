import { Link } from 'react-router-dom';

const Empty = () => {
  return (
    <>
      <Link to={'/'}>
        <button>Main Page</button>
      </Link>
    </>
  );
};

export default Empty;

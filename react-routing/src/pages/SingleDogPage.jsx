import { useParams } from 'react-router-dom';

const SingleDogPage = () => {
  const params = useParams();
  const id = params.id;
  // const { id } = useParams();
  // const { id } = params;

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default SingleDogPage;

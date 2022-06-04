import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { loadAd, deleteAd } from './../services/ads';

const SinglePage = () => {
  const { id } = useParams();

  /* useNavigate returns a function that when called
  will programmatically take the user to another page */
  const navigate = useNavigate();

  const [ad, setAd] = useState(null);

  useEffect(() => {
    loadAd(id).then((data) => {
      setAd(data);
    });
  }, [id]);

  const handleAdDeletion = () => {
    deleteAd(id).then(() => {
      // redirect user to home page
      navigate('/');
    });
  };

  return (
    <div>
      {ad && (
        <>
          <h1>{ad.title}</h1>
          <p>{ad.description}</p>
          <Link to={`/ad/${id}/update`}>Update Ad</Link>
          <button onClick={handleAdDeletion}>Delete Ad</button>
        </>
      )}
    </div>
  );
};

export default SinglePage;

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { loadAd, updateAd } from '../services/ads';
import AdForm from './../components/AdForm';

const UpdatePage = () => {
  const { id } = useParams();

  const [ad, setAd] = useState({ title: '', description: '' });

  useEffect(() => {
    loadAd(id).then((data) => {
      setAd(data);
    });
  }, [id]);

  const navigate = useNavigate();

  const handlePublication = () => {
    updateAd(id, ad).then(() => {
      navigate(`/ad/${id}`);
    });
  };

  return (
    <div>
      <AdForm ad={ad} onAdChange={setAd} />
      <button onClick={handlePublication}>Publish Advertisement</button>
    </div>
  );
};

export default UpdatePage;

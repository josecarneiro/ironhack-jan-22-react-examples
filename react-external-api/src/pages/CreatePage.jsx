import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAd } from '../services/ads';
import AdForm from './../components/AdForm';

const CreatePage = () => {
  const [ad, setAd] = useState({ title: '', description: '' });

  const navigate = useNavigate();

  const handlePublication = () => {
    /*
    I want to issue a call to the API,
    submit the form data from the state,
    redirect user to created ad page
    */
    createAd(ad).then((data) => {
      const id = data._id;
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

export default CreatePage;

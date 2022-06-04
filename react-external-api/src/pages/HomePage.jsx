import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listAds } from './../services/ads';

const HomePage = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    listAds().then((list) => {
      setAds(list);
    });
  }, []);

  return (
    <div>
      {ads.map((ad) => (
        <Link key={ad._id} to={`/ad/${ad._id}`}>
          <h3>{ad.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;

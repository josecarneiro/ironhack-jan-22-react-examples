import axios from 'axios';

const adsApi = axios.create({
  baseURL: 'https://jsonblock.herokuapp.com/jose'
});

export const listAds = () => {
  return adsApi.get('/').then((response) => {
    return response.data;
  });
};

// const listAds = () => {
//   const promiseThatResolvesWithResponse = adsApi.get('/');
//   const promiseThatResolvesWithResponseData = promiseThatResolvesWithResponse.then((response) => response.data);
//   return promiseThatResolvesWithResponseData;
// }

// const listAds = () => adsApi.get('/').then((response) => response.data);

export const createAd = (ad) => {
  return adsApi.post('/', ad).then((response) => response.data);
};

export const loadAd = (id) =>
  adsApi.get(`/${id}`).then((response) => response.data);

export const deleteAd = (id) =>
  adsApi.delete(`/${id}`).then((response) => response.data);

export const updateAd = (id, ad) =>
  adsApi.patch(`/${id}`, ad).then((response) => response.data);

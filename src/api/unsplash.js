import axios from 'axios';

const unsplashApiCall = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term},
      headers: {
          Authorization: 'Client-ID d8b30c0f5ef17e9c8695dc1550a9c4227d194b80b403249d0c10e5744b0569e5'
      }
  })
  return response;
}

export default unsplashApiCall;


// export default axios.create({
//   baseURL: 'https://api.unsplash.com',
//   headers: {
//       Authorization: 'Client-ID d8b30c0f5ef17e9c8695dc1550a9c4227d194b80b403249d0c10e5744b0569e5'
//   }
// });

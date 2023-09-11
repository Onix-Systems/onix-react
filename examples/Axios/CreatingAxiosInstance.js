const axiosInstance = axios.create({ baseURL: 'https://reqres.in/' });

axiosInstance.get('api/users/1')
  .then((response) => {
    console.log('Successful response:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

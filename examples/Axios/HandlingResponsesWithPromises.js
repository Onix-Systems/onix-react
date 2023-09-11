axios.get(`${baseUrl}/api/users/1`)
  .then((response) => {
    console.log('Successful response:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

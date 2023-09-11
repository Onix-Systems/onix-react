try {
  const response = await axios.get(`${baseUrl}/api/users/1`);
  console.log('Successful response:', response.data);
} catch (error) {
  console.error('Error:', error);
}

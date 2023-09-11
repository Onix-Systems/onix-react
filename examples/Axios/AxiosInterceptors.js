axios.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer YOUR_AUTH_TOKEN';
  return config;
});

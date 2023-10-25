const observer = new Observer();
observer.subscribe((data) => {
  console.log('Sign up for the fired module one:', data);
});
observer.subscribe((data) => {
  console.log('Sign up for the fired module two:', data);
});
observer.notify({ someData: 'Hello' });

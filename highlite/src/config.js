export default process.env.NODE_ENV === 'development'
  ? {
      server: 'http://localhost:4200',
    }
  : {
      server: 'https://wapp.weblite.me/highlite',
    }

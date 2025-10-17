module.exports = ({ env }) => ({
  url: env('PUBLIC_URL', 'https://seasonmaster-1.onrender.com'),
  proxy: true, 

  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 10000),
  
  app: {
    keys: env.array('APP_KEYS'),
  },
});

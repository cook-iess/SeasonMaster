export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  proxy: true,
  url: env('PUBLIC_URL', 'https://seasonmaster-1.onrender.com'), // ← must be HTTPS
});

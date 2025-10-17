export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 10000),
  url: env('PUBLIC_URL', 'https://seasonmaster-1.onrender.com'), // ← must be HTTPS
  proxy: true,
  trustProxy: true, // ← critical: trust X-Forwarded-* headers from Render
  app: {
    keys: env.array('APP_KEYS'),
  },
});
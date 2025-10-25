export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 10000), // Render uses 10000 by default
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // Critical for Render (HTTPS behind proxy)
  proxy: true,
  trustProxy: true, // 👈 REQUIRED in Strapi v5+
  url: env('PUBLIC_URL', 'https://seasonmaster-1.onrender.com'), // no trailing spaces!
});
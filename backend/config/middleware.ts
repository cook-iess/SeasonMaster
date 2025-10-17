export default ({ env }) => ({
  settings: {
    // Override settings for the 'strapi::session' middleware
    session: {
      enabled: true,
      cookie: {
        secure: true, 
        sameSite: env('NODE_ENV') === 'production' ? 'none' : 'strict',
      },
    },
    // Override settings for the 'strapi::cors' middleware
    cors: {
      enabled: true,
      headers: '*',
      origin: [
        env('PUBLIC_URL', 'https://seasonmaster-1.onrender.com'), 
        env('FRONT_URL', 'https://season-master-um9e.vercel.app/')
        // Add your separate frontend URL here if you have one
      ],
    },
  },
});

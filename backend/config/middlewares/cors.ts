export default ({ env }) => ({
  config: {
    headers: '*',
    origin: [
      env('PUBLIC_URL', 'https://seasonmaster-1.onrender.com').trim(),
      env('FRONT_URL', 'https://season-master-um9e.vercel.app').trim(),
    ],
  },
});
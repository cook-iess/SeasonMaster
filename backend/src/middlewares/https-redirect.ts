export default (/* config, { strapi } */) => {
  return async (ctx, next) => {
    if (ctx.get('X-Forwarded-Proto') === 'https') {
      ctx.request.protocol = 'https';
    }
    await next();
  };
};
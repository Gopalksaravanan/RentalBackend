const fp = require('fastify-plugin');

function securityPlugin(fastify, options, next) {
  const cachedUrls = ['/articles', '/public-resources'];

  fastify.addHook('onRequest', (request, reply, done) => {
    // Set security headers
    reply.header('X-XSS-Protection', '1; mode=block');
    reply.header('X-Frame-Options', 'SAMEORIGIN');
    reply.header('X-Content-Type-Options', 'nosniff');
    
    // Content Security Policy (CSP) configuration
    reply.header('Content-Security-Policy', "default-src 'self';");

    // Add HSTS header
    reply.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

    // Check if the request URL is in the list of cached URLs
    if (cachedUrls.some(url => request.url.startsWith(url))) {
      // For cached URLs, allow caching for 1 hour
      reply.header('Cache-Control', 'public, max-age=3600');
    } else {
      // For non-cached URLs, set cache-control to prevent caching
      reply.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    }

    done();
  });

  next();
}

module.exports = fp(securityPlugin);

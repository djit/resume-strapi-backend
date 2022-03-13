module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fb874089d4485fb37ce8cb078bd69655'),
  },
});

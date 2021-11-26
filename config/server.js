module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8085),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "a76e0994c612a98a3d11170c0f48b842"),
    },
  },
});

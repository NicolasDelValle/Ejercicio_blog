const passport = require("passport");
const LocalStrategy = require("passport-local");
const { User } = require("./models");

module.exports = (app) => {
  app.use(passport.session());
  
  passport.use(
    new LocalStrategy({ usernameField: "email", passwordField: "password" }, async function verify(
      username,
      password,
      cb,
    ) {
      try {
        const user = await User.findOne({
          where: { email: username },
        });
        if (!user) {
          return cb(null, false, { message: "Incorrect email or password." });
        }
        return cb(null, user);
      } catch (error) {
        return cb(error);
      }
    }),
  );
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findByPk(id)
      .then((user) => {
        done(null, user); // Usuario queda disponible en req.user.
      })
      .catch((error) => {
        done(error, user);
      });
  });
};

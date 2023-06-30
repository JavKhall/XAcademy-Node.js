const passport = require('passport')
const passportJWT = require('passport-jwt')

const SERVER_SECRET = 'QueLaFuerzaTeAcompañeJovenPadawan'
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

passport.use(
  new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: SERVER_SECRET
  }, 
  ( jwtPayload, done) => {
    const user = jwtPayload
    return done(null, user)
  })
)

const jwtValidate = passport.authenticate("jwt", { session: false })

const userIsAdmin = (req, res, next) => {
  return passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) { 
      console.error(err)
      return next(err)
    }

    if (user.role == 'Admin') {
      req.user = user
      return next()
    }

    res.status(401).json({ error: "User no Admin" })
  })(req, res, next )
}

module.exports = { 
  jwtValidate,
  userIsAdmin,
  SERVER_SECRET
}
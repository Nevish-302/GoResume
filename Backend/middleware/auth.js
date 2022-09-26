const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  //const token =
    //req.cookie['auth'].token || req.query.token || req.headers["x-access-token"];
  const { auth } = req.cookies;
  console.log(auth, 'auth token');
 const token = auth
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, 'process.env.TOKEN_KEY');
    const user = User.find({_id : decoded.user._id})
    req.user = user;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken 
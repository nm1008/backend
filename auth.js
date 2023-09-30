const jwt = require("jsonwebtoken");

const createAccessToken = (user) => {
  const data = {
    id: user._id,
    email: user.email,
    isAdmin: user.isAdmin,
  };

   return jwt.sign(data, "secret")
};

module.exports = {
    createAccessToken,
}

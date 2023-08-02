const db = require("../models");
const User = db.user;

checkDuplicate= async (req, res, next) => {
  try {
    //console.log("I am here - checkDuplicate")
    // Email
    let user = await User.findOne({email: req.body.email});
    //console.log(user)
    if (user) {
      return res.status(400).send({
        message: "e-Mail already exists. Please Login."
      });
    }

    next();
  } catch (error) {
    return res.status(500).send({
      message: "The server has run into an error. Our team is actively looking into the issue."
    });
  }
};

const verify = {
    checkDuplicate
  };
  
  module.exports = verify;
  

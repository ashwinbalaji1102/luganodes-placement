const db = require("../models");
//console.log(db);
const User = db.user;

// const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  // Save User to Database
  try {
    const user = await User.create({
      email: req.body.email,
      //password: bcrypt.hashSync(req.body.password, 8),
      password: req.body.password
    });
    
    return res.send({ message: "User registered successfully!" });
    
  } catch (error) {
    let message = error.message;
    if(message.includes("duplicate")) {message = "e-Mail already exists."}
    else message = "The server has run into an error. Our team is actively looking into the issue."
    return res.status(500).send({ message: message });
  }
};

exports.signin = async (req, res) => {
  try {
    const email = await User.findOne({email: req.body.email});
    if (!email) {
      return res.status(404).send({ message: "e-Mail Not found." });
    }

    // const passwordIsValid = bcrypt.compareSync(
    //   req.body.password,
    // );

    // if (!passwordIsValid) {
    //   return res.status(401).send({
    //     message: "Invalid Password!",
    //   });
    // }

//     const token = jwt.sign({ id: user.id },
//                            config.secret,
//                            {
//                             algorithm: 'HS256',
//                             allowInsecureKeySizes: true,
//                             expiresIn: 86400, // 24 hours
//                            });

//     let authorities = [];
//     const roles = await user.getRoles();
//     for (let i = 0; i < roles.length; i++) {
//       authorities.push("ROLE_" + roles[i].name.toUpperCase());
//     }

//     req.session.token = token;

    return res.status(200).send({
      email: email
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

// exports.signout = async (req, res) => {
//   try {
//     req.session = null;
//     return res.status(200).send({
//       message: "You've been signed out!"
//     });
//   } catch (err) {
//     this.next(err);
//   }
// };
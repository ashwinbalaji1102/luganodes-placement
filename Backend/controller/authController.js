const db = require("../models");
//console.log(db);
const User = db.user;

// const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// exports.signup = async (req, res) => {
//   // Save User to Database
//   try {
//     const user = await User.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: bcrypt.hashSync(req.body.password, 8),
//     });

//     if (req.body.roles) {
//       const roles = await Role.findAll({
//         where: {
//           name: {
//             [Op.or]: req.body.roles,
//           },
//         },
//       });

//       const result = user.setRoles(roles);
//       if (result) res.send({ message: "User registered successfully!" });
//     } else {
//       // user has role = 1
//       const result = user.setRoles([1]);
//       if (result) res.send({ message: "User registered successfully!" });
//     }
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// };

exports.signin = async (req, res) => {
  try {
    console.log("2. Message Received");
    console.log(req.body);
    console.log("Checking if e-mail exists: ",req.body.email);
    const email = await User.findOne({email: req.body.email});
    console.log(email);
    if (!email) {
      return res.status(404).send({ message: "e-Mail Not found." });
    }

//     const passwordIsValid = bcrypt.compareSync(
//       req.body.password,
//       user.password
//     );

//     if (!passwordIsValid) {
//       return res.status(401).send({
//         message: "Invalid Password!",
//       });
//     }

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
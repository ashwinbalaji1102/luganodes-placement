
const controller = require("../controller/authController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    //console.log("Do I come here?")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
    
  });


  app.post("/signin", controller.signin);
};
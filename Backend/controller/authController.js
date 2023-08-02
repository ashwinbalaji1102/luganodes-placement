exports.signin = async (req, res) => {
  try {
    console.log("2. Message Received");
    console.log(req.body);


    return res.status(200).send({
      id: "Successful",
      username: "Successful",
      email: "Successful",
      roles: "Successful",
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

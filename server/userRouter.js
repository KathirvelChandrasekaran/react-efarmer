const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("./models/userSchema");
const Plants = require("./models/plantSchema");

router.post("/register", async (req, res) => {
  try {
    var emailExists = await User.findOne({
      email: req.body.email,
    });

    if (emailExists)
      return res.status(400).json("Email already exists. Please login");
    const salat = await bcrypt.genSalt(10);
    var hash = await bcrypt.hash(req.body.password, salat);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });

    var data = await user.save();
    res.json(data);
  } catch (err) {
    res.send(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    var emailExists = await User.findOne({
      email: req.body.email,
    });
    if (!emailExists)
      return res.status(400).json("Email Not exists. Please Register");

    var validPassword = await bcrypt.compare(
      req.body.password,
      emailExists.password
    );

    if (!validPassword)
      return res.status(400).json("Email and Password does not match!!!");

    var userToken = jwt.sign(
      {
        email: emailExists.email,
      },
      "mysecretkey"
    );

    res.header("auth-token", userToken).json(userToken);
  } catch (err) {
    res.send(400).json(err);
  }
});

// const validUser = (req, res, next) => {
//   var token = req.header("auth-token");
//   res.token = token;
//   next();
// };

// router.get("/view",  async (req, res) => {
//   if (err) res.sendStatus(403);
//   else {
//     const data = await User.find().select("-password");
//     res.json(data);
//     console.log(data);
//   }
// });

router.route("/view").get(function (req, res) {
  User.find(function (err, data) {
    if (err) res.send(err);
    else res.json(data);
  });
});

router.route("/viewPlants").get(function (req, res) {
  Plants.find(function (err, data) {
    if (err) res.send(err);
    else res.json(data);
  });
});

router.route("/searchPlant/:name").get(function (req, res) {
  Plants.find({ Name: req.params.name }, function (err, data) {
    if (err) res.send(err);
    else res.json(data);
    ;
  });
});
module.exports = router;

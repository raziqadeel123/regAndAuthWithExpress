import UserModel from '../models/User.js';
class UserController {
  static home = (req, res) => {
    res.render('index');
  };

  static registration = (req, res) => {
    res.render('registration');
  };

  static createUser = async (req, res) => {
    try {
      // creating new doc or user
      const doc = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      // saving the doc
      await doc.save();
      res.redirect('/login');
    } catch (error) {
      console.log(error);
    }
  };

  static login = (req, res) => {
    res.render('login');
  };

  static verifyLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await UserModel.findOne({
        email: email,
      });
      // console.log(result);

      if (result != null) {
        if (result.email == email && result.password == password) {
          res.send(`<p>Dashboard ---- ${result}</p>`);
        } else {
          res.send('Email or Password is not valid');
        }
      } else {
        res.send('<p>Your not a registed User</p>');
      }

      // res.send('Login');
      // console.log(result.email);
    } catch (error) {
      console.log(error);
    }
  };
}

export default UserController;

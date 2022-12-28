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
}

export default UserController;

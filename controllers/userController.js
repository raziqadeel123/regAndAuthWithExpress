class UserController {
  static home = (req, res) => {
    res.render('index');
  };

  static registration = (req, res) => {
    res.render('registration');
  };

  static login = (req, res) => {
    res.render('login');
  };
}

export default UserController;

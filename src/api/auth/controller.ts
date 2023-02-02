import signin from "./handlers/signin";
import signup from "./handlers/signup";
import signout from "./handlers/signout";
import me from "./handlers/me";

const AuthController = {
  signin,
  signup,
  signout,
  me,
};

export default AuthController;

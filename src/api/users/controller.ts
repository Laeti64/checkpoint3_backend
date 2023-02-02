import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import delete_ from "./handlers/delete";
import update from "./handlers/update";

const usersController = {
  getAll,
  getOne,
  delete_,
  update,
};

export default usersController;

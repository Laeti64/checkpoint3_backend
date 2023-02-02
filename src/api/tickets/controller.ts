import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import create from "./handlers/create";
import delete_ from "./handlers/delete";
import update from "./handlers/update";

const ticketsController = {
  getAll,
  getOne,
  delete_,
  create,
  update,
};

export default ticketsController;

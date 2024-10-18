const usermanagement = require("../models/usermanagement");
const message = require("../common/errors");

module.exports = (app) => {
  /**
   * delete user by id
   * @param {*} req
   * @param {*} res
   * @returns
   */
  const deleteUser = async (req, res) => {
    let { id } = req.params;
    try {
      let user = await usermanagement.findOneAndDelete({ _id: id });

      if (!user) {
        return res.send({
          message: message.datanotFound.message,
          status: message.statusCode.success,
          data: user,
        });
      }

      return res.send({
        message: message.deleteUser.message,
        status: message.statusCode.success,
        data: user,
      });
      
    } catch (error) {
      return res.send({
        message: message.catchedError.message,
        status: message.statusCode.exception,
        error: error.message,
        function: "getuser",
      });
    }
  };

  app.put("/users/:id", deleteUser);
};

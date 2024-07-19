const userRouter = require('express').Router();

const userController = require('../controllers/user.controller');


userRouter.route('/')
    .get(userController.getAll)
    .post(userController.create);

userRouter.route('/:userName')
    .get(userController.getOne)
    .put(userController.updateUser)
    .delete(userController.deleteUser);



module.exports = userRouter;
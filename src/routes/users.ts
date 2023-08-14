import express from 'express';
import bodyParser from 'body-parser';
import userController from '../controllers/users';

const router = express.Router();
router.use(bodyParser.json());

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
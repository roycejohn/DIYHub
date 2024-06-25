

import { Router } from 'express';
import { loginUser, signupUser, authVerifyUser, logoutUser, getAllUsers } from '../controllers/userController.js';
import { verifyUser } from '../middleware/authMiddleware.js';

const userRoutes = Router();

userRoutes.post('/login', loginUser);
userRoutes.post('/signup', signupUser);


userRoutes.get('/verify', verifyUser, authVerifyUser);

userRoutes.get('/logout', logoutUser);

userRoutes.get('/users', getAllUsers);

export default userRoutes;
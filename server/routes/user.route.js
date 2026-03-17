import {Router } from 'express'; 
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);




export default router
;//middleware
// router.use(
//     cors({
//     credentials: true,
//     origin: 'http://localhost:3000'
// })
// );
// //sample route
// router.get('/', (req, res) => {
//     res.send('Login Route');
// });
import {Router } from 'express'; 
import { registerUser } from '../controllers/user.controller.js';



 const router = Router();





router.route('/register').post(registerUser);



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
import { Router } from 'express';
import { createPost, getPosts,updatePosts  } from "../controllers/post.controller.js";

const router = Router();

router.route("/create").post(createPost);
router.route("/getPosts").get(getPosts);
router.route("/updates/:id").patch(updatePosts);

export default router;








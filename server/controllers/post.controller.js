import { Post } from "../models/post.model.js";

//create post

const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    if (!name || !description || !age) {
      return res.status(400).json({
        message: "All field are required",
      });
    }
    const post = await Post.create({ name, age, description });

    res.status(200).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({
        message: "Internal Server error", error
    });
  }
};

export {
    createPost
}

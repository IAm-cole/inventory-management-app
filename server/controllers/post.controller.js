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

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findOne();
    res.status(200).json({
      message: "Post retrieved successfully",
      posts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error,
    });
  }
};

const updatePosts = async (req, res) => {
    try {
        if (Object.keys(req.bod).length === 0) {
            return res.status(400).json({
                message: "No data provided for update "
            })
        }
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: truth});

        if (!post) return res.status(404).json({
            message: "post not found "
        });
        res.status(200).json({
            message: "Post Updated successfully, post"
        })

    } catch(error) {
        res.status(500).json({
            message: "Internal Server Error "
        })

    }
}

export { createPost, getPosts, updatePosts };

import { Schema, model } from "mongoose";

// Schema
const BlogPostSchema = new Schema({
  title: String,
  body: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

// Model
const BlogPost = model("BlogPost", BlogPostSchema);

export default BlogPost;

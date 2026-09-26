const mongoose = require('mongoose');
const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: true

        },
        author: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        tags: {
            type: [String],
            default: []
        },
        published: {
            type: Boolean,
            default:false
        }},
        {
          timestamps: true
        }
);
const post=mongoose.model("post",postSchema);
module.exports=post;
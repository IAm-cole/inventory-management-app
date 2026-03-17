import mongoose, { Schema } from "mongoose";



const postSchema = new Schema (
    {
        name: {
            type: string,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 20,
        }, 

        description: {
            type: string,
            required: true,
            trim: true,
        },

        age: {
            type:Number,
            required: true,
            trim: true,
            min: 1,
            max: 150
        }

       



}, 
{
    timestamps: true
}

)

export const Post = mongoose.model("Post", postSchema);


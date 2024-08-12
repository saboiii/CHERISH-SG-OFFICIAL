import mongoose from "mongoose";

const { Schema } = mongoose

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    abstract: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
)

export default mongoose.models.Post || mongoose.model("Post", postSchema);
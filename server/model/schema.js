import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: [{
        value: {
            type: String,
            required: true,
            trim: true
        },
        published: {
            type: Date,
            default: Date.now
        }
    }]
});

const todoModel = mongoose.model('todo', todoSchema);

export default todoModel;
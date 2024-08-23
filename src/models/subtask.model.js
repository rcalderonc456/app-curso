import mongoose from 'mongoose';


const subtaskSchema = new mongoose.Schema(
    {
    title: { 
        type: String, 
        required: true },

    description: { 
        type: String, 
        required: true },

    parentTask: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Task' 
       }
}, {
    timestamps: true
});

export default mongoose.model("Subtask", subtaskSchema);
import Subtask from '../models/subtask.model.js';

// Obtener una subtarea específica por ID
export const getSubtask = async (req, res) => {
    try {
        const subtask = await Subtask.findById(req.params.subtaskId).populate('parentTask');
        if (!subtask) return res.status(404).json({ message: "Subtask not found!" });
        res.status(200).json(subtask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Crear subtarea
export const createSubtask = async (req, res) => {
    const { title, description } = req.body;
    const parentTask = req.params.taskId; // Obtener el taskId desde los parámetros de la URL

    try {
        const newSubtask = new Subtask({ title, description, parentTask });
        await newSubtask.save();
        res.status(201).json(newSubtask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Listar subtareas
export const listSubtasks = async (req, res) => {
    try {
        const subtasks = await Subtask.find({ parentTask: req.params.taskId });
        res.status(200).json(subtasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar subtarea
export const deleteSubtask = async (req, res) => {
    try {
        await Subtask.findByIdAndDelete(req.params.subtaskId);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar subtarea
export const updateSubtask = async (req, res) => {
    const { title, description } = req.body;

    try {
        const updatedSubtask = await Subtask.findByIdAndUpdate(
            req.params.subtaskId,
            { title, description },
            { new: true }
        );
        res.status(200).json(updatedSubtask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
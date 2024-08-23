import { Router } from 'express';
import { validateSchema } from '../middlewares/validator.middleware.js';
import {getSubtask, createSubtask,listSubtasks, deleteSubtask, updateSubtask} from "../controllers/subtask.controllers.js";
import {subtaskSchema} from "../schemas/subtask.schema.js";

const router = Router();

router.get('/tasks/:taskId/subtasks', listSubtasks);
router.get('/subtasks/:subtaskId', getSubtask);
router.post('/tasks/:taskId/subtasks', validateSchema(subtaskSchema), createSubtask);
router.put('/subtasks/:subtaskId', validateSchema(subtaskSchema), updateSubtask);
router.delete('/subtasks/:subtaskId', deleteSubtask);

export default router;
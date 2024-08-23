import axios from "./axios";

export const getSubTasksRequest = (taskId) => axios.get(`/tasks/${taskId}/subtasks`);
export const getSubTaskRequest = (subtaskId) => axios.get(`/subtasks/${subtaskId}`);
export const createSubTaskRequest = (taskId, subtask) => axios.post(`/tasks/${taskId}/subtasks`, subtask);
export const updateSubTaskRequest = (subtaskId, subtask) => axios.put(`/subtasks/${subtaskId}`, subtask);
export const deleteSubTaskRequest = (subtaskId) => axios.delete(`/subtasks/${subtaskId}`);
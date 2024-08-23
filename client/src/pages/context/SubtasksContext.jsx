import { createContext, useContext, useState } from "react";
import { createSubTaskRequest, deleteSubTaskRequest, getSubTasksRequest, updateSubTaskRequest } from "../../api/subtasks";

const SubTaskContext = createContext();

export const useSubTasks = () => {
  const context = useContext(SubTaskContext);
  if (!context) {
    throw new Error("useSubTasks must be used within a SubTaskProvider");
  }
  return context;
};

export function SubTaskProvider({ children }) {
  const [subtasks, setSubtasks] = useState([]);

  const createSubTask = async (subtask) => {
    try {
      const res = await createSubTaskRequest(subtask);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const getSubTasks = async () => {
    try {
      const res = await getSubTasksRequest();
      setSubtasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateSubTask = async (id, subtask) => {
    try {
      await updateSubTaskRequest(id, subtask);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteSubTask = async (id) => {
    try {
      const res = await deleteSubTaskRequest(id);
      if (res.status === 204) setSubtasks(subtasks.filter((subtask) => subtask._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const getSubTask = async(id)=>{
    try{
      const res = await getSubTasksRequest(id);
      return res.data;
    }catch (error){
      console.error(error);
    }
  }

  return (
    <SubTaskContext.Provider
      value={{
        subtasks,
        createSubTask,
        getSubTasks,
        updateSubTask,
        deleteSubTask,
        getSubTask
      }}
    >
      {children}
    </SubTaskContext.Provider>
  );
}
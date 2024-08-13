    import { createContext, useContext, useState } from "react";
    import { createTaskRequest, deleteTaskRequest, getTasksRequest, updateTaskRequest } from "../../api/tasks";
    
    const TaskContext = createContext();
    
    export const useTasks = () => {
      const context = useContext(TaskContext);
      if (!context) {
        throw new Error("useTasks must be used within a TaskProvider");
      }
      return context;
    };
    
    export function TaskProvider({ children }) {
      const [tasks, setTasks] = useState([]);
    
      const createTask = async (task) => {
        try {
          const res = await createTaskRequest(task);
          console.log(res);
        } catch (error) {
          console.error(error);
        }
      };
    
      const getTasks = async () => {
        try {
          const res = await getTasksRequest();
          setTasks(res.data);
        } catch (error) {
          console.error(error);
        }
      };
    
      const updateTask = async (id, task) => {
        try {
          await updateTaskRequest(id, task);
        } catch (error) {
          console.error(error);
        }
      };
    
      const deleteTask = async (id) => {
        try {
          const res = await deleteTaskRequest(id);
          if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
        } catch (error) {
          console.error(error);
        }
      };
    
      const getTask = async(id)=>{
        try{
          const res = await getTasksRequest(id);
          return res.data;
          //console.log(res.data);

        }catch (error){
          console.error(error);
        }
      }
      return (
        <TaskContext.Provider
          value={{
            tasks,
            createTask,
            getTasks,
            updateTask,
            deleteTask,
            getTask
          }}
        >
          {children}
        </TaskContext.Provider>
      );
    }

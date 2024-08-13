import { useEffect } from "react";
import { useTasks } from "./context/TasksContext";
import TaskCard from "./TaskCard";

function TaskPage() {
    const {getTasks, tasks} = useTasks();
    useEffect(() => {
        getTasks();
    },[]);

    return (
    <div className="grid grid-cols-3 gap-2">
        {tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
        ))}
    </div>

);
}

export default TaskPage;


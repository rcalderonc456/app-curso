import { useForm } from "react-hook-form";
import { useSubTasks } from "./context/SubtasksContext";
import { useNavigate, useParams } from "react-router-dom";

function SubtaskFormPage() {
    const { register, handleSubmit } = useForm();
    const { createSubTask } = useSubTasks(); 
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        await createSubTask(params.taskId, data); // Pasar el taskId y los datos del formulario
        navigate(`/tasks/${params.taskId}`);
    });

    return (
        <div className="bg-zinc-800 max-w-md w-full rounded-md">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Subtask Title"
                    {...register("title")}
                    autoFocus
                />
                <textarea
                    rows="3"
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Subtask Description"
                    {...register("description")}
                />
                <button type="submit">Save Subtask</button>
            </form>
        </div>
    );
}

export default SubtaskFormPage;
import {z} from "zod";

export const subtaskSchema = z.object(
    {
        title: z.string({required_error: "Titulo is required"}),
        description: z.string({required_error: "Descripcion is required"})
    }
);

export default subtaskSchema;
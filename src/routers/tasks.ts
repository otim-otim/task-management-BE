import { Router } from "express";
import { ITaskCreateDTO, ITaskUpdateDTO, TaskColor } from "../types";
import { getTasks, createTask, updateTask, deleteTask } from "../services/tasks";
import { celebrate, Joi } from 'celebrate'

const router = Router();

router.get("/", async (req, res) => {
    try {
        const tasks = await getTasks();
        res.send({ tasks });

    } catch (error) {
        res.send({ error });
    }
});

router.post("/", celebrate({
    body: Joi.object({
        title: Joi.string().required(),
        color: Joi.string().valid('red', 'blue', 'green', 'yellow', 'purple', 'orange', 'gray').required()
    })
}),
    async (req, res) => {
        try {
            const taskReq = req.body as ITaskCreateDTO
            const task = await createTask(taskReq)
            res.send({
                task,
                message: "Task created successfully"
            });

        } catch (error) {
            res.send({ error });
        }
    });


router.put("/:id", celebrate({
    body: Joi.object({
        title: Joi.string(),
        color: Joi.string().valid('red', 'blue', 'green', 'yellow', 'purple', 'orange', 'gray'),
        completed: Joi.boolean()
    })
}), async (req, res) => {
    const taskReq = req.body as ITaskUpdateDTO
    const task = await updateTask(taskReq, Number(req.params.id))
    res.send({
        task,
        message: "Task updated successfully"
    });
});

router.delete("/:id", async (req, res) => {
    try {
        const task = await deleteTask(Number(req.params.id))
        res.send({
            task,
            message: "Task deleted successfully"
        });
    } catch (error) {
        res.send({ error });
    }
});
export default router;
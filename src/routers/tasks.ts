import { Router } from "express";
import { ITaskCreateDTO , ITaskUpdateDTO } from "../types";
import { getTasks, createTask, updateTask } from "../services/tasks";
import {celebrate, Joi} from 'celebrate'

const router = Router();

router.get("/", async (req, res) => {
    try {
        const tasks = await getTasks();
        res.send({tasks});
        
    } catch (error) {
        res.send({error});
    }
});

router.post("/", celebrate({
    body: Joi.object({
        title: Joi.string().required(),
        color: Joi.string().required()
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
            res.send({error});
        }
});


router.put("/:id",celebrate({
    body: Joi.object({
        title: Joi.string().required(),
        color: Joi.string().required(),
        isCompleted: Joi.boolean().required()
    })
}), async (req, res) => {
    const taskReq = req.body as ITaskUpdateDTO
    const task = await updateTask(taskReq, Number(req.params.id))
    res.send({
        task,
        message: "Task updated successfully"
    });
});

router.delete("/:id", (req, res) => {
    res.send("Delete Task");
});
export default router;
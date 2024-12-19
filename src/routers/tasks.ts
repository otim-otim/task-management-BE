import { Router } from "express";
import { ITaskCreateDTO , ITaskUpdateDTO } from "../types";
import { getTasks, createTask } from "../services/tasks";
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
            res.send({task});
            
        } catch (error) {
            res.send({error});
        }
});


router.put("/:id", (req, res) => {
    const { title, color, isCompleted } = req.body as ITaskUpdateDTO
    res.send("Update Task");
});

router.delete("/:id", (req, res) => {
    res.send("Delete Task");
});
export default router;
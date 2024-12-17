import { Router } from "express";
import { ITaskCreateDTO , ITaskUpdateDTO } from "../types";

const router = Router();

router.get("/", (req, res) => {
    res.send("Tasks");
});

router.post("/", (req, res) => {
    const { title, color } = req.body as ITaskCreateDTO
    res.send("Create Task");
});


router.put("/:id", (req, res) => {
    const { title, color, isCompleted } = req.body as ITaskUpdateDTO
    res.send("Update Task");
});

router.delete("/:id", (req, res) => {
    res.send("Delete Task");
});
export default router;
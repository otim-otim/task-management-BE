import express from "express";
import taskRouter  from "./routers/tasks";

const app = express();

app.use(express.json());
app.use("/tasks", taskRouter);


app.listen (8001, () => {
    console.log("Server is running on port 8001");
});
import express from "express";
import taskRouter  from "./routers/tasks";
import prisma from "./utils/prismaClient";

const app = express();

app.use(express.json());
app.use("/tasks", taskRouter);

process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
  
process.on('SIGTERM', async () => {
    await prisma.$disconnect();
    process.exit(0);
  });

  const PORT = process.env.PORT || 3000;

app.listen (PORT, () => {
    console.log("Server is running on port 8001");
});
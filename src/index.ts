import express from "express";
import taskRouter  from "./routers/tasks";
import prisma from "./utils/prismaClient";
import cors from "cors";

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: '*', //todo: change this in production
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

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
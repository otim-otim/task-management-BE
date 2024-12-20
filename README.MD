# Task Todo Backend

## Project Overview
A Node.js Express backend for a Task Management Application built with TypeScript, Prisma, and MySQL.

## Prerequisites
- Node.js (v20+)
- npm (v10+)
- Docker (optional)
- MySQL database

## Technology Stack
- TypeScript
- Express.js
- Prisma ORM
- MySQL
- CORS middleware

## Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/otim-otim/task-management-BE.git
cd task-management-BE
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the project root with the following variables:
```env
DATABASE_URL="mysql://username:password@localhost:3306/task_todo_db"
PORT=3000
```

### 4. Database Setup
```bash
# Initialize Prisma
npx prisma generate

# Run database migrations
npx prisma migrate dev
```

### 5. Run the Application

#### Development Mode
```bash
npm start
```

#### Production Mode
```bash
npm run build
npm run start:prod
```

## Docker Deployment

### Build Docker Image
```bash
docker build -t task-todo-be .
```

### Run Docker Container
```bash
docker run -p 3000:3000 task-todo-be
```

## API Endpoints
- `GET /tasks`: Retrieve all tasks
- `POST /tasks`: Create a new task
- `PUT /tasks/:id`: Update an existing task
- `DELETE /tasks/:id`: Delete a task

## Testing
```bash
npm test
```

## Troubleshooting
- Ensure MySQL is running
- Check database connection string
- Verify environment variables

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


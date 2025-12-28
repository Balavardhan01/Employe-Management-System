🧑‍💼 Employee Task Management System (React)
A React-based Employee Task Management System that allows an Admin to create and manage tasks, and Employees to view, accept, complete, or fail assigned tasks.
The project uses localStorage for authentication and task persistence and is styled using Tailwind CSS.

🚀 Features

👨‍💻 Admin
Login as Admin
Create new tasks
View all employee tasks
Logout functionality

👩‍💼 Employee
Secure login
View assigned tasks
See tasks categorized as:
New
Active
Completed
Failed
Logout functionality

🔐 Authentication
Role-based login (Admin / Employee)
Session persistence using localStorage

🛠️ Tech Stack
React JS
Tailwind CSS
Context API
LocalStorage
Vite

📂 Project Structure
src/
│
├── components/
│ ├── Auth/
│ │ └── Login.jsx
│ │
│ ├── Dashboard/
│ │ ├── AdminDashboard.jsx
│ │ └── EmployeeDashboard.jsx
│ │
│ ├── Others/
│ │ ├── Header.jsx
│ │ ├── CreateTask.jsx
│ │ ├── ViewTasks.jsx
│ │ ├── TasksNumber.jsx
│ │ └── TaskLists.jsx
│ │
│ └── Tasklist/
│ ├── AcceptTask.jsx
│ ├── CompleteTask.jsx
│ ├── FailedTask.jsx
│ └── NewTask.jsx
│
├── Context/
│ └── AuthProvider.jsx
│
├── App.jsx
├── main.jsx
└── index.css

🔑 Login Credentials

Admin Login
Email: admin@me.com
Password: 123
 
Employee Login
Use credentials available in the AuthProvider employee data.
🧠 Task Status Logic
Each task has flags to determine its state:
{
title: "Task Title",
description: "Task details",
date: "2025-01-05",
category: "Work",
active: false,
newTask: true,
completed: false,
failed: false
}

Only one status is true at a time, and the UI renders the correct task card accordingly.

📦 Installation & Setup
Clone the repository
git clone <your-repo-link>
Navigate to the project
cd employee-task-management
Install dependencies
npm install
Start the development server
npm run dev

🎯 Future Improvements
Update task status dynamically (Accept / Complete / Fail)
Admin assigning tasks to specific employees
Backend integration (Node + MongoDB)
Protected routes
Better UI animations

👨‍🎓 Learning Outcomes
React component architecture
Context API usage
State & props management
Conditional rendering
LocalStorage authentication
Tailwind CSS layout design

🙌 Author
Bala Vardhan
2nd Year BTech Student
Aspiring Full Stack Developer & Cloud Architect ☁️

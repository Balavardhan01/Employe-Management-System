const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare report",
        description: "Prepare monthly sales report",
        date: "2025-01-05",
        category: "Work",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team meeting",
        description: "Attend weekly team sync",
        date: "2025-01-07",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client follow-up",
        description: "Follow up with existing client",
        date: "2025-01-10",
        category: "Client",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Fix bugs",
        description: "Resolve bugs from QA team",
        date: "2025-01-06",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code review",
        description: "Review teammate code",
        date: "2025-01-08",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update documentation",
        description: "Update project docs",
        date: "2025-01-11",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Learn new feature",
        description: "Learn React hooks",
        date: "2025-01-12",
        category: "Learning",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Design UI",
        description: "Create dashboard UI",
        date: "2025-01-04",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client presentation",
        description: "Present UI to client",
        date: "2025-01-09",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Feedback changes",
        description: "Apply client feedback",
        date: "2025-01-13",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Database backup",
        description: "Take weekly DB backup",
        date: "2025-01-06",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize queries",
        description: "Improve slow queries",
        date: "2025-01-10",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Server monitoring",
        description: "Monitor server load",
        date: "2025-01-12",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Security audit",
        description: "Check system security",
        date: "2025-01-15",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Marketing plan",
        description: "Create marketing strategy",
        date: "2025-01-05",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Social media post",
        description: "Post campaign updates",
        date: "2025-01-07",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Analyze metrics",
        description: "Analyze campaign performance",
        date: "2025-01-11",
        category: "Analytics",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = () =>{
      localStorage.setItem('employees',JSON.stringify(employees))
      localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employees,admin)
}

# Todo List App

## Overview
This is a simple **React-based Todo List Application** that allows users to:
- Add new todo items
- View the list of todos in a table
- Assign tasks to users
- Remove completed or unwanted tasks

## Tech Stack
- **React.js**
- **Bootstrap** (for styling)
- **JavaScript (ES6+)**

## Project Structure
```
📂 src
 ├── 📂 components
 │   ├── TodoTable.js
 │   ├── TodoRowItem.js
 │   ├── NewTodoForm.js
 ├── App.js
 ├── App.css
 ├── index.js
```

## Installation & Running
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the application:**
   ```bash
   npm start
   ```

## Components
### 1️⃣ **TodoTable.js**
Displays the list of todos with an assigned user and allows deleting an item.

### 2️⃣ **TodoRowItem.js**
A single row component representing an individual todo item.

### 3️⃣ **NewTodoForm.js**
Allows users to add new todo items with a description and an assigned user.

## Features
✅ **Add a New Todo** using the input form  
✅ **Display Todos** in a table format  
✅ **Remove a Todo** by clicking on a row  
✅ **Toggle Form Visibility** for adding new todos  

## Example Usage
- Click on **"Show Form"** to add a new todo
- Fill in the description and assigned user
- Click **"Add Todo"** to add it to the list
- Click on a row to **delete** a todo item

## License
This project is open-source and available under the **MIT License**.

---
Feel free to contribute and enhance this project! 🚀

# Todo List with Zustand

A simple Todo List application built with **React** and **Zustand** for state management. 
This project was created as part of Practical 6 for WEB101 – Web Development.

## Features

- Add new todos
- Mark todos as completed (with strikethrough)
- Delete individual todos
- Clear all completed todos at once
- Todo count and completed count displayed in real time
- Todos persist across page refreshes using localStorage


## Tech Stack

| Technology | Purpose |
|------------|---------|
| React | UI library |
| Vite | Build tool and dev server |
| Zustand | Global state management |
| localStorage | Data persistence via Zustand persist middleware |

## Project Structure
todo-zustand/
├── public/
├── src/
│   ├── components/
│   │   ├── TodoInput.jsx      # Input field and Add button
│   │   ├── TodoItem.jsx       # Single todo item with checkbox and delete
│   │   └── TodoList.jsx       # List of all todos and Clear Completed button
│   ├── store/
│   │   └── todoStore.js       # Zustand store (state + actions)
│   ├── App.jsx                # Root component
│   └── main.jsx               # Entry point
├── index.html
├── package.json
└── README.md

## Getting Started
### Installation

1. Clone the repository or download the project folder:

git clone https://github.com/your-username/todo-zustand.git
npx create vite@latest todo-zustand
cd todo-zustand

2. Install dependencies:
npm install

3. Install Zustand:
npm install zustand

4. Start the development server:

npm run dev

5. Open your browser and go to:

http://localhost:5173

## How It Works

### Zustand Store

The store is defined in `src/store/todoStore.js` and contains:

| State / Action | Description |
|----------------|-------------|
| `todos` | Array of all todo objects |
| `addTodo(text)` | Adds a new todo with an id, text, and completed: false |
| `toggleTodo(id)` | Flips the completed status of a todo |
| `removeTodo(id)` | Removes a todo by its id |
| `clearCompleted()` | Removes all todos where completed is true |

### Persistence

The `persist` middleware from `zustand/middleware` is used to automatically save the todos array to `localStorage` under the key `todo-storage`. On page reload, the state is restored from localStorage.

## Usage

1. Type a task in the input field and click **Add** (or press Enter)
2. Click the **checkbox** next to a todo to mark it as complete
3. Click **Delete** to remove a todo
4. Click **Clear Completed** to remove all finished todos
5. Refresh the page — your todos will still be there!

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |

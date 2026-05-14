# Reflection – Practical 6: State Management with Zustand

## Overview

In this practical, I built a Todo List application using React and Zustand for state management. The goal was to understand how Zustand works and how it compares to other approaches like prop drilling and the Context API.

## What I Learned

### Zustand Makes State Management Simple

Before this practical, I had only used `useState` and prop drilling to share data between components. This worked for small components but quickly became messy when multiple components needed the same data. Zustand solved this by providing a single centralised store that any component can access directly using a hook — no need to pass props down through multiple layers.

### The Store Pattern

I learned how to create a Zustand store using the `create` function and define both state and actions inside it. Having the state and the functions that modify it in one place made the code much easier to read and maintain. For example, instead of lifting state up to a parent component, I simply called `useTodoStore(state => state.addTodo)` from any component that needed it.

### Persistence with Middleware

One of the most interesting parts of this practical was learning about the `persist` middleware. With just a few extra lines of code, Zustand automatically saved the todos to `localStorage` and restored them on page reload. This showed me how middleware can add powerful features to an application without significantly increasing code complexity.

### Component Design

Building separate components for `TodoInput`, `TodoItem`, and `TodoList` taught me how to think about separation of concerns. Each component had a single responsibility, which made the code easier to debug and understand. Because Zustand handled the shared state, none of the components needed to pass data to each other through props.

## Challenges Faced

### Setting Up the Project

The first challenge I encountered was the incorrect command. I initially ran `npx create vite@latest` which gave an error. I learned that the correct command for Vite is `npm create vite@latest`. This was a small but important lesson about reading error messages carefully.

### Default Vite Template

After setting up the project and writing all the components, the browser was still showing the default Vite welcome screen. I realised I had forgotten to replace the existing code in `App.jsx` with my own. I also had to clear the default styles from `App.css` and `index.css` to remove Vite's built-in styling.

### Understanding Selectors

At first, I was unsure why we pass a selector function to `useTodoStore` like `useTodoStore(state => state.todos)` instead of just calling `useTodoStore()`. After building the app, I understood that selectors allow each component to subscribe only to the specific piece of state it needs, which prevents unnecessary re-renders and improves performance.

## What I Would Do Differently

- Add proper CSS styling to make the UI look more polished and professional
- Add input validation with a visible error message when the user tries to submit an empty todo
- Add a filter feature to view all, active, or completed todos separately
- Use unique IDs from a library like `uuid` instead of `Date.now()`, which could produce duplicate IDs if todos are added very quickly

## Conclusion

This practical gave me a solid understanding of how state management works in React beyond basic `useState`. Zustand is a clean and beginner-friendly library that removes a lot of the complexity found in other solutions. I feel more confident now in building React applications where multiple components need to share and update the same data. The persistence feature was a great bonus that showed how real-world applications handle data retention without a backend database.
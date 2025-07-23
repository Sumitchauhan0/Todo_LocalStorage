# Todo Local Storage React App

A simple React Todo app that saves todos in the browser’s local storage.

## Features

### Core Todo Functionality
- **Add Todo:** Quickly add new tasks with a simple input form.
- **Edit Todo:** Modify existing todo text inline with easy toggle between view and edit mode.
- **Delete Todo:** Remove unwanted todos with a confirmation popup to prevent accidental deletion.
- **Toggle Completion:** Mark todos as completed or incomplete via a checkbox.
- **Persist Todos:** Automatically save and load todos from browser's local storage, so your list is saved across page refreshes.

### User Interface & Experience
- **Responsive UI:** Works well on desktop and mobile screens with fluid layouts.
- **Theme Toggle:** Switch between light and dark modes seamlessly with a stylish toggle button.
- **Visual Feedback:** Completed todos show a distinct style (e.g., strikethrough, background color) for clarity.
- **Accessible:** Proper keyboard focus management and semantic HTML for screen reader compatibility.
- **Smooth Transitions:** Subtle animations for editing, toggling, and theme switching enhance user experience.

### Data & State Management
- **Context API:** Uses React Context to share todos and operations (add, update, delete, toggle) across components.
- **State Synchronization:** Keeps UI state and local storage perfectly in sync with React state hooks.
- **Unique IDs:** Each todo has a unique timestamp-based ID to avoid clashes.

### Additional Functionalities
- **Confirmation Modals:** User-friendly modal dialogs for confirming deletion and saving edits.
- **Error Handling:** Prevents adding empty todos and handles edge cases gracefully.
- **Performance:** Efficient rendering with React best practices to avoid unnecessary re-renders.

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/Sumitchauhan0/Todo_LocalStorage.git

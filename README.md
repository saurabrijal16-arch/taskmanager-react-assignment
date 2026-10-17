# Task Manager

A small React assignment: add a task, pick its due date and priority, and see it appear as a card.

## Run locally

Use Node.js 22.12+ or 24.

```sh
npm install
npm run dev
```

To create and preview the production build:

```sh
npm run build
npm run preview
```

## How it works

- `App.jsx` holds the task list in `useState` and passes an add function to the form.
- `TaskForm.jsx` keeps each field in `useState`. Submitting a valid task calls the parent function and clears all three fields.
- `TaskList.jsx` receives the tasks through props and renders a card for each one.
- `TaskCard.jsx` shows the task name, due date, and a labelled priority badge.
- `Styles.css` handles the two-column layout and stacks the sections on smaller screens.

The app uses Vite, React, JavaScript, and plain CSS. There are no other hooks, state libraries, backend services, or saved tasks. Refreshing the page clears the list.

## Deploy

Import this repository into Vercel. Select the Vite preset, use `npm run build` as the build command, and `dist` as the output directory. The GitHub connection enables automatic deployments after pushes.

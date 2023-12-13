# Introducing AI Powered Process Builder App (PBGPT)
Backend - https://github.com/anujaagarwal/process-builder-server
AI-Powered Process Builder is a web application that allows users to create, manage, and store process definitions and generate steps both using AI assistant and manually. Just give a small and concise definition of the process and it will give you steps. The application integrates with an AI model (like ChatGPT) for natural language interpretation and provides a user-friendly interface for process management.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Program Design](#program-design)
- [Key Decision Making and Reasoning behind that](#decisions)
- [API Integration](#api-integration)
- [UI related decisions](#ui-related-decisions)
- [Technologies Used](#technologies-used)
- [Known Issues](#known-issues)
- [Future Scope](#future-scope)
- [Deployment](#Deployment)

## Project Overview

This web application allows users to get steps to a process definition user inputs. It includes the following key features:

- **Ai-Assisted Page:** In AIAssisted page it takes the input from the user and shows the steps of particular process by interacting with the LLM. Also gives the permission to edit each steps and save it in the db.

- **Manual Definition Page:** In Manual Definition page user can create its own process and steps linked to it, and user can shuffle the steps and can edit and delete steps too.

The application is responsive and works well on various screen sizes. Additionally, it caches API responses to improve performance and responsiveness.

## Getting Started

Follow these steps to run the project locally:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/anujaagarwal/AI-Powered-Process-Builder.git
   ```

2. Navigate to the project directory:

   ```bash
   cd AI-Powered-Process-Builder
   ```

3. Install project dependencies:

   ```bash
   npm install

   ```

4. Set you environment variable before starting the application. You can store environment variables under .env.local file of the project.

Environment Variables used are:-

```bash
 VITE_REACT_APP_API_BASE_URL = https://ai-process-builder.onrender.com/api
```

5. Start the development server:

   ```bash
   npm run dev

   ```

6. Open your web browser and access the application at `http://localhost:5173` you will see the Home Page. You will see two buttons one is to use PBGPT which is AiAssisted page and another is manual definition page.

## Program Design

The program is designed as a single-page application (SPA) using React.js. It consists of multiple components that are structured into a well-defined folder structure. Key components include:

- **HomePage:** It's a landing page of the website.

- **Ai Assisted Page:** Here you can talk to PBGPT to get and edit steps of the description you type in

- **Manual Definition Page:** Here user can manually create a process and steps and store final steps in the db

- **FolderStructure:** Explaining folder structure in 2 to 3 lines. Certainly! In a React.js project, the folder structure is designed to promote an organized and efficient development process. At the root level, you'll typically find essential configuration files such as package.json, tailwindconfig. The src directory contains pages and components Directory. You must have seen "components" directory for reusable React components. This structure not only encourages a component-based architecture but also aligns well .
  Here is the folder structure:-

```bash
── package.json
├── package-lock.json
├── postcss.config.js
├── public
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── AiAssisted
│   │   │   ├── ChatHistory.jsx
│   │   │   └── ChatInput.jsx
│   │   ├── common
│   │   │   ├── Button.jsx
│   │   │   └── InputField.jsx
│   │   ├── Home
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── WelcomeBanner.jsx
│   │   └── ManualDefinition
│   │       ├── CreateProcess.jsx
│   │       ├── CreateStep.jsx
│   │       ├── EditStepForm.jsx
│   │       ├── ProcessDisplay.jsx
│   │       └── StepList.jsx
│   ├── index.css
│   ├── main.jsx
│   └── pages
│       ├── AiAssisted.jsx
│       ├── Home.jsx
│       └── ManualDefinition.jsx
├── tailwind.config.js
└── vite.config.js

```

## Key Decision Making and Reasoning behind that:-

1. I opted to use FetchApi for data fetching due to its user-friendly and straightforward syntax. Fetch is built into modern browsers, which means I don't need to add an additional library or package like Axios. This can reduced the size of my application and simplified my project's dependencies.
2. Kept most of the business logic in pages and kept the code modular by creating reusable components.

## API Integration

- The frontend communicates with the backend API to create, update, and retrieve process and steps data.
- API calls are made using the `fetch` API and `async/await` for asynchronous operations.

## UI related decisions:-

1. I used Tailwind CSS for efficient and consistent UI development, reducing custom CSS and promoting faster project delivery. Also it is really easy to adapt if someone knows CSS.

2. I used glassmorphism design in the UI since Glassmorphism adds a modern and visually appealing look to user interfaces. It keeps the design aesthetic.

3. A chat-like interface is used for inputting process descriptions and viewing AI-generated steps(PBGPT).
4. The application is responsive and compatible with various screen sizes and devices, ensuring accessibility for a wide range of users.

## Technologies

- **[React](https://react.dev/):** The JavaScript library for building user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework that simplifies styling.
- **[React Router](https://reactrouter.com/en/main):**: For client-side routing.
- **[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API):**: For making HTTP requests to the backend.
- **[State Management](https://legacy.reactjs.org/docs/hooks-state.html):**: React's built-in state management.
- **ESLint and Prettier**: For code formatting and linting.
- **[Vite](https://vitejs.dev/):**: For fast development.
- **[Vercel](https://vercel.com/):**: For fast and easy deployment process.

## Known Issues

- While working on this project, I want to acknowledge that I didn't strictly adhere to the best practices of separating of concerns within React components. The primary reason for this was time constraints and the need to deliver a functional project within the specified timeline.

I understand the importance of maintaining a clear separation of concerns in a well-structured application, where UI components are decoupled from data-fetching and processing. This separation ensures better maintainability, scalability, and reusability of code.

- I could have used Proptypes in my components but I didn't use for the time constraint given.

## Future Scope

- We can add upload file options in the AI assistant. From which it will read detailed description and get steps.
- We can also add images and videos for each step being displayed rather than only working with texts.
- There should be an option of mic so that anyone can speak and it converts to process definition in AI assistant page.

## Deployment

I deployed the app using Vercel.

Here is the link to the App:-

```bash
  https://ai-powered-process-builder.vercel.app/

```

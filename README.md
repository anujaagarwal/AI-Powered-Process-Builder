# AI Powered Process Builder App (PBGPT)

AI-Powered Process Builder is a web application that allows users to create, manage, and store process definitions using both AI-assisted input and manual process definition. The application integrates with an AI model (like ChatGPT) for natural language interpretation and provides a user-friendly interface for process management.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Program Design](#program-design)
- [Key Decision Making and Reasoning behind that](#decisions)
- [UI related decisions](#ui)
- [Technologies](#technologies)
- [Known Issues](#known-issues)
- [Deployment](#Deployment)

## Project Overview

This web application allows users to explore stocks information. It includes the following key features:

- **Ai-Assisted Page:** In AIAssisted page it takes the input from the user and shows the steps of particular process by interacting with the LLM. Also gives the permission to edit each steps and save it in the db.

- **Manual Definition Page:** In Manual Definition page user can create its own process and steps linked to it, and user can shuffle the steps and can edit and delete steps too.

The application is responsive and works well on various screen sizes. Additionally, it caches API responses to improve performance and responsiveness.

## Getting Started

Follow these steps to run the project locally:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/anujaagarwal/groww-stocks.git
   ```

2. Navigate to the project directory:

   ```bash
   cd AI-Powered-Process-Builder-App
   ```

3. Install project dependencies:

   ```bash
   npm install

   ```

4. Set you environment variable before starting the application. You can obtain a free API key from [Financial Modeling Prep](https://site.financialmodelingprep.com/) by signing up on their website. Once you have your API key, store it in your project's environment variables. You can store environment variables under .env.local file of the project.

Environment Variables used are:-

```bash
 NEXT_PUBLIC_API_KEY  (Generate your API key and assign it to the variable)
 NEXT_PUBLIC_BASE_URL="https://site.financialmodelingprep.com/"
```

5. Start the development server:

   ```bash
   npm run dev

   ```

6. Open your web browser and access the application at `http://localhost:3000` you will see Top Gainers and losers. You can click on any card button to get access to each stock page which routes to `stock/${id}`

**Note:** To access the API endpoints, you'll need an API key from [Financial Modeling Prep](https://site.financialmodelingprep.com/). If the site's data cards are not available, you can generate a new API key from the site after signing up. This API key should be stored securely in your project's environment variables in .env.local file. The decision to use this site is based on having a higher rate limit, making it suitable for development and testing purposes.

## Program Design

The program is designed as a single-page application (SPA) using Next.js. It consists of multiple components that are structured into a well-defined folder structure. Key components include:

- **ExplorePage:** Displays the top gainers and losers, featuring grids of cards representing stocks and ETFs. Clicking on a card routes the user to the Product Page for that item.

- **Stock Page:** Provides detailed information about a selected stock or ETF, including basic data and a candle stick graph of price changes.

- **NavBar:** A common Navbar that appears on both pages, displaying the application name and a search bar.

- **SearchBar:** Part of the Navbar, it shows suggested stocks as the user types.

- **FolderStructure:** Explaining folder structure in 2 to 3 lines. Certainly! In a Next.js project, the folder structure is designed to promote an organized and efficient development process. At the root level, you'll typically find essential configuration files such as package.json, next.config.js, tailwindconfig. The src directory contains pages Directory. The "pages" directory is a fundamental aspect of Next.js, as it automatically generates routes based on the files within it. It's where you create your various web pages, and the file structure here mirrors the URL structure of my site. Additionally, the "public" directory is used to store static assets like images and fonts. You must have seen "components" directory for reusable React components, and a "styles" directory for CSS or styling files. This structure not only encourages a component-based architecture but also aligns well with server-rendered and static site generation.
  Here is the folder structure:-

```bash
── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   └── vite.svg
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

1. The reason for using local storage is because there will be no need to make an extra request to the backend every time we want to fetch data and also here we are dealing with really small amount of data.
2. In the assignment it is mentioned to use line chart for every stock information, but I have used candlestick charts since it provide insight into buying and selling trends over the course of each day (or other unit of time) by showing high and low prices as well as open and close prices, in short OHLC. The OHLC data encapsulates vital information that can significantly impact trading strategies and investment choices.
3. I opted to use Axios for data fetching due to its user-friendly and straightforward syntax. Axios simplifies the process of making HTTP requests, making it more convenient for integrating with various APIs. Its clear and concise syntax reduces boilerplate code, which translates into enhanced code readability and maintainability. Additionally, Axios offers a robust set of features, such as automatic transformation of JSON data, and built-in error handling.
4. Initially, I began my project by utilizing the [Alpha Vantage](https://www.alphavantage.co.) API for data retrieval. However, during the development and testing phase, I encountered limitations in terms of the API's rate limit, which restricted the number of requests I could make per day. This constraint significantly impacted the speed and efficiency of my development workflow.
   To overcome this limitation and ensure smoother development and testing, I decided to switch to the [Financial Modeling Prep](https://site.financialmodelingprep.com/) API as an alternative data source. This strategic shift allowed me to work more efficiently and ensure the timely completion of the project without being hindered by rate limitations.

## UI related decisions:-

1. I used Tailwind CSS for efficient and consistent UI development, reducing custom CSS and promoting faster project delivery. Also it is really easy to adapt if someone knows CSS.
2. I used HighChart as 3rd party library for creating candlestick charts.

## Technologies

- **[Nextjs](https://nextjs.org/):** The framework used for building the Single Page Application.
- **[React](https://react.dev/):** The JavaScript library for building user interfaces.
- **[Financial Modeling Prep API](https://site.financialmodelingprep.com/):** Provides stock and ETF data.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework that simplifies styling.
- **[HighChart](https://www.highcharts.com/):** A library for creating interactive charts.
- **[Axios:](https://axios-http.com/docs/intro)** For making HTTP requests to the Financial Modeling Prep API.

## Known Issues

- While working on this project, I want to acknowledge that I didn't strictly adhere to the best practices of separating pf concerns within React components. The primary reason for this was time constraints and the need to deliver a functional project within the specified timeline.

I understand the importance of maintaining a clear separation of concerns in a well-structured application, where UI components are decoupled from data-fetching and processing. This separation ensures better maintainability, scalability, and reusability of code.

- In the chart 6m, 1m button isn't working.
- 52 week high and low chart can be improved.

The above issues are known issues which I haven't fixed but if given time I will definitely fix these.

## Deployment

I deployed using Vercel and also want to repeat that there is limitations to the use of API. So, if you see no data on the screen then generate a new API key and you can see the stockcards again.

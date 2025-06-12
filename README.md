Test task: Table IP routes (React)
This repository contains the implementation of a test task to create a user interface for displaying a list of IP routes. The primary feature is a table that can be sorted by any column according to specific rules.


The application is built with React, TypeScript, and Vite.

![Screenshot 2025-06-12 211823](https://github.com/user-attachments/assets/2bf71db3-1292-46c9-aa7f-24ee0ce44217)


Key Features
Route Table Display: Renders a list of active IPv4 routes in a clean, tabular format.

Column Sorting: The table can be sorted by any column: "Адрес назначения" (Destination Address), "Шлюз" (Gateway), or "Интерфейс" (Interface).
Custom Sort Logic:
The "Адрес назначения" and "Шлюз" columns are sorted by their numerical IP address values, not lexicographically.
The "Интерфейс" column uses standard string comparison for sorting.
Component-Based Architecture: The application is broken down into logical components:
RoutesTable.tsx: A container (or "smart") component that manages all state and sorting logic.
RoutesDisplay.tsx: A presentational (or "dumb") component responsible only for rendering the UI.
Typed Codebase: The entire project is written in TypeScript, ensuring type safety and improved developer experience.
Technology Stack
Framework: React
Language: TypeScript
Build Tool: Vite
Data: Mock data is used to populate the table, with each route being an object with a defined structure.
Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
You need to have Node.js and npm installed on your machine.

Installation & Usage
Clone the repository
Bash

git clone <your-repository-url>
Navigate to the project directory
Bash

cd ndm-front-test
Install NPM packages
Bash

npm install
Run the development server
Bash

npm run dev
The application will be available at http://localhost:5173 (or another port if 5173 is in use).

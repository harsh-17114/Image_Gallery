# Image Gallery

A simple, responsive, and user-friendly **Image Gallery App** built with **React**, **Axios**, and **Tailwind CSS**. The application fetches images from the **Picsum Photos API**, displays them in a responsive gallery, and provides pagination to browse different pages of images.

## Features

* Fetches images dynamically from the Picsum Photos API
* Displays images in a responsive gallery layout
* Shows the author's name for each image
* Opens the original image page in a new browser tab
* Pagination with Previous and Next buttons
* Displays the current page number
* Prevents navigation to pages below page 1
* Shows a loading message while fetching images
* Clears old images while loading a new page
* Responsive and modern UI using Tailwind CSS
* Fast and lightweight React application

## Tech Stack

* **React.js** – Frontend library for building the user interface
* **Axios** – Used to make HTTP requests to the Picsum API
* **Tailwind CSS** – Styling and responsive design
* **JavaScript (ES6+)** – Application logic
* **Picsum Photos API** – Provides random image data
* **Vite** – Development and build tool

## Project Structure

```text
Image_Gallery/
│
├── src/
│   ├── Components/
│   │   └── Card.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/harsh-17114/Image_Gallery.git
```

### 2. Navigate to the project directory

```bash
cd Image_Gallery
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## How It Works

The application uses React's `useState` and `useEffect` hooks to manage image data and pagination.

* `useState` stores the fetched images and current page number.
* `useEffect` triggers a new API request whenever the page number changes.
* `axios` sends GET requests to the Picsum Photos API.
* The API response is stored in the `userData` state.
* The `map()` function creates a `Card` component for each image.
* Tailwind CSS provides the gallery layout and responsive styling.
* Pagination updates the page number and automatically fetches new images.

## Main Components

### App.jsx

Contains the main application logic, including:

* API data fetching
* State management
* Pagination
* Loading state
* Rendering image cards
* Handling Previous and Next buttons

### index.css

Contains the Tailwind CSS import:

```css
@import "tailwindcss";
```

### main.jsx

The application entry point that renders the `App` component using React's `createRoot` and `StrictMode`.

### Card.jsx

Responsible for displaying an individual image card, including:

* Image preview
* Author name
* Link to the original image page

## Conclusion

Image Gallery is a simple React project designed to demonstrate the fundamentals of fetching and displaying data from an external API. It provides a clean interface for browsing images from the Picsum Photos API with basic pagination. The project demonstrates important frontend concepts including React hooks, API integration with Axios, component-based development, props, state management, event handling, conditional rendering, array mapping, pagination, and responsive UI design with Tailwind CSS.
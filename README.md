# Node Periodic Table Demo

This is a simple Node.js application built with Express that allows users to look up information about elements in the periodic table by their symbols or periods. The application serves a static web interface with HTML, CSS, and JavaScript, and also provides RESTful API endpoints for querying element data.

## Features

- **Static Web Interface:** A user-friendly front-end for looking up periodic table elements.
- **API Endpoints:** Fetch element details by symbol or list elements by period.
- **Hot Reloading:** Uses `nodemon` for development, providing hot reloading capabilities.
- **Easy to Extend:** The application structure makes it easy to add more features or modify existing ones.

## Prerequisites

- **Node.js:** v20.10.0
- **npm:** v9.6.4

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/mck231/node-periodic-table-demo.git
    cd node-periodic-table-demo
    ```

2. **Install the dependencies:**

    ```sh
    npm install
    ```

## Usage

1. **Start the application with hot reload:**

    ```sh
    npm run dev
    ```

2. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```

   You will see a simple web interface where you can look up element information by symbol or period.

## Serving Static Files

The application serves static HTML, CSS, and JavaScript files from the `/public` directory. The main entry point for the web interface is `index.html`, which is served at the root URL (`/`).

- **HTML Files:** Located in `src/public/`
- **CSS Files:** Located in `src/public/`
- **JavaScript Files:** Located in `src/public/`

These static files provide the front-end interface for interacting with the periodic table data.

## API Endpoints

The application provides RESTful API endpoints for looking up element information:

- **GET /api/element**: Look up details for a specific element by its symbol.
   - **Query Parameters**:
      - `symbol` (string): The symbol of the element to look up (e.g., `H` for Hydrogen).
   - **Example Request**:
       ```sh
       curl "http://localhost:3000/api/element?symbol=H"
       ```

- **GET /api/period**: Retrieve a list of elements in a specific period of the periodic table.
   - **Query Parameters**:
      - `period` (number): The period number to look up (e.g., `2`).
   - **Example Request**:
       ```sh
       curl "http://localhost:3000/api/period?period=2"
       ```

## Project Structure

The project is organized as follows:

- **`src/`**: Contains the source code for the application.
   - **`public/`**: Contains static HTML, CSS, and JavaScript files for the front-end interface.
   - **`contollers/`**: Contains route handlers for the API endpoints.
   - **`index.ts`**: Main entry point for the application.
   - ** `models.ts`**: Contains the data models for application.
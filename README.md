# Node.js CRUD App with SQLite

This is a simple CRUD (Create, Read, Update, Delete) application built with Node.js and SQLite. The application demonstrates basic operations on a SQLite database.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Create:** Add new items to the database.
- **Read:** Retrieve all items from the database.
- **Update:** Modify existing items in the database.
- **Delete:** Remove items from the database.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- SQLite

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo

2. Install dependencies:
    npm install

3. Run the application:
    node app.js

### The server will be running at `http://localhost:3000`

## Usage

- GET /: Retrieve all items.
- POST /: Add a new item.
    Request Body: JSON with name property.
- PUT /:id: Update an existing item.
    Request Body: JSON with updated name property.
- DELETE /:id: Delete an item.

## Contribution

Contributions are welcome! If you'd like to contribute, please follow these guidelines.

## License

This project is licensed under the MIT License
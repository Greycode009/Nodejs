# Book API

A RESTful API for managing books built with Node.js, Express, and PostgreSQL using Sequelize ORM.

## Features

- CRUD operations for books (Create, Read, Update, Delete)
- PostgreSQL database integration
- Express.js framework
- Sequelize ORM

## Prerequisites

- Node.js
- PostgreSQL database

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Greycode009/Nodejs.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

The server will start on port 3000 by default.

## API Endpoints

### Get all books

```
GET /books
```

### Get a specific book

```
GET /books/:id
```

### Add a new book

```
POST /books
```

Request body:

```json
{
  "title": "Book Title",
  "author": "Author Name",
  "description": "Book description",
  "publishedYear": 2023
}
```

### Update a book

```
PUT /books/:id
```

Request body: Same as POST

### Delete a book

```
DELETE /books/:id
```

## Environment Variables

The application uses the following environment variables:

- Database connection string is configured in database/connection.js

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM

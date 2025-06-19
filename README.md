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

3. Set up environment variables:

   - Create a `.env` file in the project root directory
   - Add your PostgreSQL connection string as shown in the Environment Variables section

4. Start the server:

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

The application uses environment variables for database configuration. Create a `.env` file in the root directory with the following:

```env
CS=your_postgresql_connection_string
```

Example of the connection string format:

```env
CS=postgresql://username:password@host:port/database_name
```

Note: Make sure to replace the values with your actual PostgreSQL database credentials.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM

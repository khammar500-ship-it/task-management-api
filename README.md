# Task Management API

A simple REST API for managing tasks, built with Node.js and Express.

## Requirements

- Node.js 18+
- npm
- Postman (recommended for testing)

## Installation

```bash
npm install
```

## Run in development

```bash
npm run dev
```

## Run normally

```bash
npm start
```

The API runs on:

```text
http://localhost:5000
```

## Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get one task |
| POST | `/tasks` | Create a task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

## POST /tasks

Request body:

```json
{
  "title": "Study Node.js",
  "description": "Practice Express REST APIs",
  "isCompleted": false
}
```

Successful response: `201 Created`

## PUT /tasks/:id

You can update one or more fields:

```json
{
  "title": "Study Express",
  "isCompleted": true
}
```

Successful response: `200 OK`

## DELETE /tasks/:id

Successful response:

```text
204 No Content
```

## Validation

- `title` must be a non-empty string.
- `description` must be a non-empty string when creating a task.
- `isCompleted` must be a boolean.
- Task IDs must be positive integers.

## Error status codes

- `400 Bad Request` — invalid input or invalid ID
- `404 Not Found` — task/route does not exist
- `500 Internal Server Error` — unexpected server error

## Important

This version uses an in-memory array instead of a database because the challenge does not require a database. Data will reset whenever the server restarts.

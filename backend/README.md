# `/users/register` Endpoint Documentation

## Overview
The **POST** `/users/register` endpoint registers a new user in the system. It validates the incoming request body and creates a user record in the database.

## Request
- **URL**: `/users/register`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Body** (JSON):
  ```json
  {
    "email": "user@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "password": "securePassword123"
  }
  ```
  - `email` – must be a valid email address.
  - `fullname.firstname` – minimum 3 characters.
  - `password` – minimum 6 characters.
  - `fullname.lastname` is optional but can be included.

## Validation
The endpoint uses **express‑validator** to enforce the above constraints. If any validation fails, a **400 Bad Request** response is returned with details of the validation errors.

## Responses
| Status Code | Description |
|-------------|-------------|
| **201 Created** | User successfully registered. Returns the created user object (excluding the password). |
| **400 Bad Request** | Validation failed. The response includes an array of error messages describing the issues. |
| **500 Internal Server Error** | An unexpected error occurred while processing the request (e.g., database error). |

## Example Successful Response
```json
{
  "_id": "64b8f2a5c9e4f5d6a7b8c9d0",
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "createdAt": "2025-11-29T18:12:34.567Z"
}
```

### Example Response 

- `user` (object):
    - `fullname` (object).
        - `firstname` (string): User's first name (minimum 3 characters).
        - `lastname` (string): User's last name (minimum 3 characters).
    - `email` (string): User's email address (must be a valid email).
    - `password` (string): User's password (minimum 6 characters). 
    - `token` (String): JWT Token

## Notes
- Passwords are hashed before being stored in the database.
- The endpoint is defined in `backend/routes/user.routes.js` and handled by `userController.registerUser`.
- Ensure that the request body matches the schema exactly to avoid validation errors.

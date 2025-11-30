# User Authentication Endpoints Documentation

## Overview
This document describes the API endpoints for user registration and login. These endpoints allow users to create new accounts and authenticate to access protected resources.

---

## `/users/register` Endpoint

### Overview
The **POST** `/users/register` endpoint registers a new user in the system. It validates the incoming request body and creates a user record in the database.

### Request
-   **URL**: `/users/register`
-   **Method**: `POST`
-   **Headers**:
    -   `Content-Type: application/json`
-   **Body** (JSON):
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
    -   `email` (string, required) – Must be a valid email address.
    -   `fullname.firstname` (string, required) – User's first name, minimum 3 characters.
    -   `fullname.lastname` (string, optional) – User's last name, minimum 3 characters.
    -   `password` (string, required) – User's password, minimum 6 characters.

### Validation
The endpoint uses **express-validator** to enforce the above constraints. If any validation fails, a **400 Bad Request** response is returned with details of the validation errors.

### Responses
| Status Code | Description |
|-------------|-------------|
| **201 Created** | User successfully registered. Returns the created user object (excluding the password) and a JWT token. |
| **400 Bad Request** | Validation failed (e.g., invalid email, password too short, missing fields) or a user with the given email already exists. The response includes an array of error messages describing the issues. |
| **500 Internal Server Error** | An unexpected error occurred while processing the request (e.g., database error). |

### Example Successful Response
```json
{
  "_id": "64b8f2a5c9e4f5d6a7b8c9d0",
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "createdAt": "2025-11-29T18:12:34.567Z",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Notes
-   Passwords are hashed before being stored in the database.
-   The endpoint is defined in `backend/routes/user.routes.js` and handled by `userController.registerUser`.
-   Ensure that the request body matches the schema exactly to avoid validation errors.

---

## `/users/login` Endpoint

### Overview
The **POST** `/users/login` endpoint authenticates an existing user. It validates the provided credentials and, if successful, returns a JSON Web Token (JWT) for subsequent authenticated requests.

### Request
-   **URL**: `/users/login`
-   **Method**: `POST`
-   **Headers**:
    -   `Content-Type: application/json`
-   **Body** (JSON):
    ```json
    {
      "email": "user@example.com",
      "password": "securePassword123"
    }
    ```
    -   `email` (string, required) – The user's registered email address.
    -   `password` (string, required) – The user's password.

### Validation
The endpoint uses **express-validator** to ensure the `email` is a valid format and `password` is provided. If validation fails, a **400 Bad Request** response is returned.

### Responses
| Status Code | Description |
|-------------|-------------|
| **200 OK** | User successfully logged in. Returns the user object (excluding the password) and a JWT token. |
| **400 Bad Request** | Validation failed (e.g., invalid email format, missing password). |
| **401 Unauthorized** | Invalid credentials (e.g., incorrect email or password). |
| **500 Internal Server Error** | An unexpected error occurred while processing the request (e.g., database error). |

### Example Successful Response
```json
{
  "_id": "64b8f2a5c9e4f5d6a7b8c9d0",
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "createdAt": "2025-11-29T18:12:34.567Z",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Notes
-   The returned JWT token should be included in the `Authorization` header of subsequent requests as a Bearer token (e.g., `Authorization: Bearer <token>`).
-   The endpoint is defined in `backend/routes/user.routes.js` and handled by `userController.loginUser`.


## `/users/profile` Endpoint

### Overview
GET `/users/profile` returns the authenticated user's profile. Requires authentication middleware.

### Request
- **URL**: `/users/profile`
- **Method**: GET
- **Headers**: `Authorization: Bearer <token>`

### Responses
| Status Code | Description |
|-------------|-------------|
| **200 OK** | Returns user profile (id, email, fullname, createdAt). |
| **401 Unauthorized** | Missing or invalid token. |

### Example Successful Response
```json
{
  "_id": "64b8f2a5c9e4f5d6a7b8c9d0",
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "createdAt": "2025-11-30T10:00:00.000Z"
}
```

## `/users/logout` Endpoint

### Overview
GET `/users/logout` logs out the user by clearing the JWT cookie and blacklisting the token.

### Request
- **URL**: `/users/logout`
- **Method**: GET
- **Headers**: `Authorization: Bearer <token>` (or cookie `token`)

### Responses
| Status Code | Description |
|-------------|-------------|
| **200 OK** | `{ "message": "Logout successful" }` |
| **401 Unauthorized** | Invalid or missing token. |

### Example Response
```json
{
  "message": "Logout successful"
}
```

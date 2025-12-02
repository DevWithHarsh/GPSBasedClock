# Captain Endpoints Documentation

## Overview
This document describes the API endpoints for Captain registration, login, profile retrieval, and logout. These endpoints allow Captains to manage their accounts in the system.

---

## `/captains/register` Endpoint

### Overview
The **POST** `/captains/register` endpoint registers a new Captain in the system. It validates the incoming request body and creates a Captain record in the database.

### Request
- **URL**: `/captains/register`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Body** (JSON):
  ```json
  {
    "email": "captain@example.com",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "password": "securePassword123"
  }
  ```
  - `email` (string, required) – Must be a valid email address.
  - `fullname.firstname` (string, required) – Captain's first name, minimum 3 characters.
  - `fullname.lastname` (string, optional) – Captain's last name, minimum 3 characters.
  - `password` (string, required) – Captain's password, minimum 6 characters.

### Validation
The endpoint uses **express-validator** to enforce the above constraints. If any validation fails, a **400 Bad Request** response is returned with details of the validation errors.

### Responses
| Status Code | Description |
|-------------|-------------|
| **201 Created** | Captain successfully registered. Returns the created Captain object (excluding the password) and a JWT token. |
| **400 Bad Request** | Validation failed (e.g., invalid email, password too short, missing fields) or a Captain with the given email already exists. The response includes an array of error messages describing the issues. |
| **500 Internal Server Error** | An unexpected error occurred while processing the request (e.g., database error). |

### Example Successful Response
```json
{
  "_id": "64b8f2a5c9e4f5d6a7b8c9d0",
  "email": "captain@example.com",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "createdAt": "2025-11-29T18:12:34.567Z",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Notes
- Passwords are hashed before being stored in the database.
- The endpoint is defined in `backend/routes/captain.routes.js` and handled by `captainController.registerCaptain`.
- Ensure that the request body matches the schema exactly to avoid validation errors.

---

## `/captains/login` Endpoint

### Overview
The **POST** `/captains/login` endpoint authenticates an existing Captain. It validates the provided credentials and, if successful, returns a JSON Web Token (JWT) for subsequent authenticated requests.

### Request
- **URL**: `/captains/login`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Body** (JSON):
  ```json
  {
    "email": "captain@example.com",
    "password": "securePassword123"
  }
  ```
  - `email` (string, required) – The Captain's registered email address.
  - `password` (string, required) – The Captain's password.

### Validation
The endpoint uses **express-validator** to ensure the `email` is a valid format and `password` is provided. If validation fails, a **400 Bad Request** response is returned.

### Responses
| Status Code | Description |
|-------------|-------------|
| **200 OK** | Captain successfully logged in. Returns the Captain object (excluding the password) and a JWT token. |
| **400 Bad Request** | Validation failed (e.g., invalid email format, missing password). |
| **401 Unauthorized** | Invalid credentials (e.g., incorrect email or password). |
| **500 Internal Server Error** | An unexpected error occurred while processing the request (e.g., database error). |

### Example Successful Response
```json
{
  "_id": "64b8f2a5c9e4f5d6a7b8c9d0",
  "email": "captain@example.com",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "createdAt": "2025-11-29T18:12:34.567Z",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Notes
- The returned JWT token should be included in the `Authorization` header of subsequent requests as a Bearer token (e.g., `Authorization: Bearer <token>`).
- The endpoint is defined in `backend/routes/captain.routes.js` and handled by `captainController.loginCaptain`.

---

## `/captains/profile` Endpoint

### Overview
The **GET** `/captains/profile` endpoint returns the authenticated Captain's profile. Requires authentication middleware.

### Request
- **URL**: `/captains/profile`
- **Method**: `GET`
- **Headers**:
  - `Authorization: Bearer <token>`

### Responses
| Status Code | Description |
|-------------|-------------|
| **200 OK** | Returns Captain profile (id, email, fullname, createdAt). |
| **401 Unauthorized** | Missing or invalid token. |

### Example Successful Response
```json
{
  "_id": "64b8f2a5c9e4f5d6a7b8c9d0",
  "email": "captain@example.com",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "createdAt": "2025-11-30T10:00:00.000Z"
}
```

### Notes
- The endpoint is defined in `backend/routes/captain.routes.js` and handled by `captainController.getCaptainProfile`.

---

## `/captains/logout` Endpoint

### Overview
The **GET** `/captains/logout` endpoint logs out the Captain by clearing the JWT cookie and blacklisting the token.

### Request
- **URL**: `/captains/logout`
- **Method**: `GET`
- **Headers**:
  - `Authorization: Bearer <token>` (or cookie `token`)

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

### Notes
- The endpoint is defined in `backend/routes/captain.routes.js` and handled by `captainController.logoutCaptain`.

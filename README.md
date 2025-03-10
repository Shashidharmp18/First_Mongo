# React, Node.js, and MongoDB Project

## Overview

This project connects a **React.js** frontend with a **Node.js** backend and a **MongoDB** database. It provides a seamless full-stack web application setup with API interactions, authentication, and CRUD operations.

## Tech Stack

- **Frontend:** React.js (Vite/CRA)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT (JSON Web Tokens) *(if applicable)*
- **Environment Variables:** `dotenv`

## Installation & Setup

### Prerequisites

Ensure you have installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the Repository

```sh
gh repo clone Shashidharmp18/First_Mongo
cd First_Mongo
```

### 2. Setup Backend

```sh
cd backend
npm install  # Install dependencies
```

Create a `.env` file in the `backend` directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the server:

```sh
npm start
```

### 3. Setup Frontend

```sh
cd ../frontend
npm install  # Install dependencies
```

Create a `.env` file in the `frontend` directory and add:

```env
REACT_APP_API_URL=http://localhost:5000
```

Run the frontend:

```sh
npm start
```

## API Routes

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| GET    | /api/users | Get all users |
| POST   | /api/users | Create a user |
| GET    | /api/posts | Get all posts |
| POST   | /api/posts | Create a post |

## Deployment

### Backend Deployment (e.g., Heroku, Render, Vercel)

1. Push backend code to GitHub
2. Deploy using a cloud service (e.g., Heroku, Render, AWS)
3. Set environment variables on the server
4. Use a service like MongoDB Atlas

### Frontend Deployment (e.g., Vercel, Netlify)

1. Push frontend code to GitHub
2. Deploy using Netlify/Vercel
3. Configure environment variables
4. Ensure backend API URL is correctly set

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to GitHub (`git push origin feature-branch`)
5. Submit a pull request

## License

This project is open-source under the [MIT License](LICENSE).




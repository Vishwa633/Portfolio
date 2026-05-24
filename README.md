# Agrolink

Agrolink is a web-based agricultural community management system developed using the MERN stack.  
The platform allows users to share agricultural knowledge through blogs, questions and answers, crop and disease information, events, and marketplace-related features.

---

# Table of Contents

- Introduction
- Features
- Technologies Used
- Prerequisites
- Project Structure
- Installation
- Environment Variables
- Running the Application
- Database Seeding
- API Endpoints
- Common Issues
- Future Improvements
- Contributing
- License

---

# Introduction

Agrolink was developed to create a centralized digital platform for farmers, agricultural communities, and general users to interact and share knowledge efficiently.

The system includes:
- Blog and post management
- Q&A discussions
- Agricultural articles
- Crop and disease management
- Chatbot support
- Image upload functionality
- Event and marketplace features

The project follows a MERN architecture:

- **Frontend:** React.js
- **Backend:** Node.js + Express.js
- **Database:** MongoDB
- **Media Storage:** Cloudinary (Optional)

---

# Features

## User Features
- User registration and login
- Authentication system
- User profile management

## Blog & Community
- Create, update, and delete posts
- View community posts
- Categories management
- Q&A discussions

## Agricultural Features
- Crop information management
- Disease and pest management
- Agricultural article system

## Media Features
- Image upload support
- Cloudinary integration

## Additional Features
- Chatbot functionality
- Event management
- Marketplace-related modules

---

# Technologies Used

## Frontend
- React.js
- React Router DOM
- Axios
- CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Other Tools
- Nodemon
- dotenv
- Cloudinary

---

# Prerequisites

Before running the project, install the following:

- Node.js (LTS recommended)
- npm
- MongoDB (Local installation or MongoDB Atlas)

Optional:
- Cloudinary account for image uploads

---

# Project Structure

```bash
Agrolink/
│
├── api/                 # Backend source code
│   ├── models/
│   ├── routes/
│   ├── images/
│   ├── .env
│   └── server.js
│
├── client/              # React frontend
│   ├── public/
│   ├── src/
│   └── package.json
│
└── README.md
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/your-username/Agrolink.git
```

Move into the project directory:

```bash
cd Agrolink
```

---

## Backend Setup

```bash
cd api
npm install
```

---

## Frontend Setup

```bash
cd ../client
npm install
```

---

# Environment Variables

Create a `.env` file inside the `api` folder and add the following:

```env
# MongoDB Connection String
MONGO_URL=your_mongodb_connection_string

# Optional Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

# Running the Application

## Start Backend Server

```bash
cd api
npm start
```

The backend server runs on:

```text
http://localhost:5000
```

---

## Start Frontend Server

```bash
cd client
npm start
```

The frontend runs on:

```text
http://localhost:3000
```

---

# Running Both Servers Together

You can use VS Code compound tasks:

```text
Terminal → Run Task → Dev: All
```

This will start both frontend and backend simultaneously.

---

# Database Seeding

To insert sample crop, disease, and article data:

```bash
cd api
node seed.js
```

Make sure your `MONGO_URL` is correctly configured before running the seed script.

---

# API Endpoints

## Authentication

```http
POST /api/auth
```

Handles user registration and login.

---

## Posts

```http
GET /api/posts
POST /api/posts
PUT /api/posts/:id
DELETE /api/posts/:id
```

Handles blog post management.

---

## Categories

```http
GET /api/categories
```

Retrieves all available categories.

---

## Uploads

```http
POST /api/upload
```

Uploads a single image/file.

### Form Data
| Key  | Value Type |
|------|------------|
| file | File |

---

# Common Issues

## 503 Service Unavailable

This usually happens when:
- MongoDB is not running
- `MONGO_URL` is missing
- Database connection failed

Solution:
- Check MongoDB server
- Verify `.env` configuration
- Restart backend server

---

## React Scripts Error

If you get:

```bash
react-scripts is not recognized
```

Run:

```bash
npm install
```

inside the `client` folder.

---

## Image Upload Errors

Check:
- Cloudinary credentials
- Internet connection
- Environment variables

---

# Future Improvements

- Real-time chat system
- AI-powered agricultural assistant
- Weather forecasting integration
- Mobile application support
- Online marketplace expansion
- Farmer-to-farmer communication system

---

# Contributing

Contributions are welcome.

Steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# License

This project is open-source and available under the MIT License.

You may add a `LICENSE` file to the repository if required.

---

# Additional Notes

- Make sure both frontend and backend servers are running simultaneously.
- Always verify MongoDB connectivity before starting development.
- Check terminal logs for debugging backend or frontend issues.

---

# Author

Agrolink — Agricultural Community Management System  
Developed using the MERN Stack.

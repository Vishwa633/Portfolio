# 🌱 Agrolink

A modern MERN-stack based agricultural community management platform designed to connect farmers and users through blogs, Q&A discussions, crop and disease information, events, and marketplace features.

---

## 🚀 Features

- 🔐 User Authentication & Authorization
- 📝 Blog/Post Management System
- ❓ Questions & Answers (Q&A)
- 🤖 Chatbot Support
- 🌾 Crop Information Management
- 🦠 Disease & Pest Information
- 🖼️ Image Upload Support
- ☁️ Cloudinary Integration
- 📅 Event Management
- 🛒 Marketplace Features

---

# 🛠️ Tech Stack

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

## Tools & Services
- Nodemon
- dotenv
- Cloudinary

---

# 📂 Project Structure

```bash
Agrolink/
│
├── api/                 # Backend
│   ├── models/
│   ├── routes/
│   ├── images/
│   └── server.js
│
├── client/              # Frontend
│   ├── public/
│   ├── src/
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

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

# 🔑 Environment Variables

Create a `.env` file inside the `api` folder:

```env
MONGO_URL=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

# ▶️ Running the Project

## Start Backend

```bash
cd api
npm start
```

Backend runs on:

```text
http://localhost:5000
```

---

## Start Frontend

```bash
cd client
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# 🌱 Database Seeding

To insert sample crop, disease, and article data:

```bash
cd api
node seed.js
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth` | User authentication |
| GET | `/api/posts` | Get all posts |
| POST | `/api/posts` | Create a post |
| GET | `/api/categories` | Get categories |
| POST | `/api/upload` | Upload image/file |

---

# ⚠️ Common Issues

## 503 Service Unavailable

Possible reasons:
- MongoDB is not running
- Invalid `MONGO_URL`
- Backend server is down

Solution:
- Check MongoDB connection
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

# 🚀 Future Improvements

- Real-time chat system
- AI-powered farming assistant
- Weather forecasting integration
- Mobile application
- Expanded marketplace system

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to your branch
5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Developed using the MERN Stack for agricultural community management.

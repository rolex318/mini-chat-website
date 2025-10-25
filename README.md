# 💬 Mini Chat Website (EJS + Node.js + Express + MongoDB)

A simple **Mini Chat App** built using **Node.js**, **Express**, **MongoDB**, **EJS templates**, and a little bit of **CSS**.  
This project demonstrates how to perform **CRUD operations** (Create, Read, Update, Delete) for chat messages between users in a clean and minimal interface.

---

## 🚀 Features

✅ Display all chats (sender, receiver, message)  
✅ Add a new chat message  
✅ Edit or update an existing chat  
✅ Delete chat messages  
✅ MongoDB integration for storing chats  
✅ Uses EJS for server-side rendering  
✅ Simple and clean UI with minimal CSS  

---

## 🧠 Tech Stack

| Technology | Description |
|-------------|-------------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Backend web framework |
| **EJS (Embedded JavaScript)** | Template engine for rendering dynamic HTML |
| **MongoDB / Mongoose** | Database for storing chat data |
| **CSS** | For basic styling |

---

## 📁 Project Structure

mini-chat/
│
├── views/
│ ├── index.ejs # Show all chats
│ ├── new.ejs # Form to add new chat
│ ├── edit.ejs # Edit existing chat
│
├── public/
│ └── style.css # Simple styling
│
├── models/
│ └── chat.js # Mongoose schema for chat
│
├── app.js # Main server file
├── package.json # Dependencies
└── README.md # Project documentation



---

## ⚙️ Installation & Setup

### 1️⃣ Clone this Repository

```bash
git clone https://github.com/your-username/mini-chat.git
cd mini-chat
npm install

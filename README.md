# 🎮 **Chill Gamer - Your Ultimate Game Reviews Hub**

Welcome to **Chill Gamer**, the ultimate platform for discovering and sharing video game reviews. Explore, rate, and save your favorite games to your personalized watchlist with just a few clicks.

🔗 [Live Website](https://chill-gamer-f8131.firebaseapp.com/)

---

## 📸 **Screenshots**

### **Home Page**

![Home Page Screenshot](./src/assets/scernshots/Screenshot%202025-01-08%20at%2015.12.44.png)

### **All Review Page**

![Game Details Screenshot](./src/assets/scernshots/Screenshot%202025-01-08%20at%2015.13.03.png)

### **Watchlist Page**

![Watchlist Screenshot](./src/assets/scernshots/Screenshot%202025-01-08%20at%2015.13.43.png)

---

## ✨ **Features**

- **🚀 Personalized Watchlist**: Save your favorite games to a watchlist and easily track your gaming journey.
- **⭐ Ratings & Reviews**: View and contribute ratings and reviews for top games shared by other gamers.
- **🔎 Search & Discover**: Easily explore games by title, genre, or other filter options.
- **🏆 Top-Rated Games Section**: Discover the highest-rated games based on user feedback.
- **📆 Real-Time Updates**: Experience seamless updates to your watchlist and preferences.

---

## 📂 **Tech Stack**

- **Frontend**: React, TailwindCSS, DaisyUI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Firebase, Vercel

---

## 🚀 **Setup and Installation**

### **Prerequisites**

- Node.js (latest LTS version recommended)
- MongoDB (local or cloud instance)
- Firebase Account (for deployment and authentication)

### **Dependencies**

```json
{
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "@tanstack/react-query": "^5.62.16",
    "axios": "^1.7.9",
    "firebase": "^11.0.2",
    "framer-motion": "^11.13.1",
    "prop-types": "^15.8.1",
    "react": "^18.3.1",
    "react-awesome-reveal": "^4.2.14",
    "react-dom": "^18.3.1",
    "react-fast-marquee": "^1.6.5",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.0.2",
    "react-tooltip": "^5.28.0",
    "sweetalert2": "^11.15.10",
    "swiper": "^11.1.15"
  }
}
```

### **Environment Variables**

Create a `.env.local` file with the following variables:

```plaintext
# Firebase configuration
VITE_apiKey=YOUR_API_KEY
VITE_authDomain=YOUR_AUTH_DOMAIN
VITE_projectId=YOUR_PROJECT_ID
VITE_storageBucket=YOUR_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_MESSAGING_SENDER_ID
VITE_appId=YOUR_APP_ID

VITE_URL=YOUR_APPLICATION_URL
```

### **Steps**

1. Clone the repository:

   ```bash
   git clone https://github.com/Sabuj-Chowdhury/chill-gamer
   ```

2. Navigate to the project directory:

   ```bash
   cd chill-gamer
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run start
   ```

5. Run the backend server:
   ```bash
   node index.js
   ```

---

## 🖥️ **Server Setup**

To set up the backend server, follow these steps:

### **1. Clone the Repository**

```bash
git clone https://github.com/Sabuj-Chowdhury/chill-gamer-server
```

### **2. Install Dependencies**

Install the necessary dependencies:

```bash
npm install
```

### **3. Configure Environment Variables**

Create a `.env` file in the project root and include:

```plaintext
DB_USER=YOUR_DB_USER
DB_PASS=YOUR_DB_PASS
```

Replace `YOUR_DB_USER` and `YOUR_DB_PASS` with your database credentials.

### **4. Start the Server**

Run the server:

```bash
npm start
```

---

## 🔒 **Notes**

- Add `.env` to `.gitignore` to prevent sensitive information from being committed.
- Consult the project owner for database and authentication details if needed.

---

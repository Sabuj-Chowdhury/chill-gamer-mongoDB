# 🎮 **Chill Gamer - Your Ultimate Game Reviews Hub**

Welcome to **Chill Gamer** - the ultimate platform for discovering and sharing video game reviews. Explore, rate, and save your favorite games to your personalized watchlist with just a few clicks.

🔗 [Live Website URL](https://chill-gamer-f8131.firebaseapp.com/)

---

## Screenshots

### Screenshot 1

![Screenshot 1](./src/assets/scernshots/Screenshot%202025-01-08%20at%2015.12.44.png)

### Screenshot 2

![Screenshot 2](./src/assets/scernshots/Screenshot%202025-01-08%20at%2015.13.03.png)

### Screenshot 3

![Screenshot 3](./src/assets/scernshots/Screenshot%202025-01-08%20at%2015.13.43.png)

---

## ✨ **Features**

- 🚀 **User Watchlist:** Save your favorite games to a personalized watchlist and track your gaming journey easily.
- ⭐ **Ratings & Reviews:** View and rate the most iconic and top-rated games from multiple reviews shared by other gamers.
- 🔎 **Search & Discover:** Explore reviews by game title, genre, or other filtering options.
- 🏆 **Top-Rated Games Section:** Discover the most highly rated games based on user feedback.
- 📆 **Real-Time Updates:** Experience seamless data updates for your watchlist and user preferences.

---

## 📂 **Tech Stack**

- **Frontend:** React, TailwindCSS, DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Deployment:** Firebase / Vercel

---

## 🚀 Setup and Installation

### Prerequisites

- Node.js
- MongoDB
- Firebase Account

## Dependencies

````json
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
  },

## Environment Variables

This project requires certain environment variables to be set in a `.env.local` file. Below is an example template for the `.env.local` file:

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


### Steps

1. Clone the repository:


2. Install dependencies:

   ```bash
   npm install
````

3. Start the development server:

   ```bash
   npm run start
   ```

4. Run the backend server:
   ```bash
   node index.js
   ```

---

## Server Setup Instructions

To set up the server for this project, follow the steps below:

### 1. Clone the Repository

```bash
git clone https://github.com/Sabuj-Chowdhury/chill-gamer-server
```

### 2. Install Dependencies

Install the required dependencies by running:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```plaintext
DB_USER=YOUR_DB_USER
DB_PASS=YOUR_DB_PASS
```

Replace `YOUR_DB_USER` and `YOUR_DB_PASS` with the appropriate values.

### 4. Run the Server

Start the server by running:

```bash
npm start
```

### Notes

- Ensure that the `.env` file is **not committed to version control** by adding it to the `.gitignore` file.
- For database and authentication details, consult your system administrator or project owner.

---

# 🚀 Crypto Tracker Dashboard (MERN)

A responsive, interactive cryptocurrency dashboard that shows live market data for top cryptocurrencies and interactive price charts.  
This version uses a **Node.js + Express** backend with **MongoDB** for persistence (watchlist, saved coins, caching, etc.) and consumes the **CoinGecko API** for real-time crypto data.


## ✨ Features
- 📊 Live cryptocurrency market data (top coins)
- 💱 Currency toggle: USD / INR
- 📈 24-hour price change with green/red indicators
- 🧮 Market cap & 24h trading volume
- 🔍 Search coins by name or symbol
- ↕️ Sort by:
  - Market Cap
  - Price
  - 24h Change
- 📉 Interactive 7-day price chart
- ⭐ Watchlist / Saved coins (MongoDB)
- 🔄 Manual refresh + optional auto-refresh
- ⚠️ Graceful error handling for API/network issues
- 📱 Fully responsive design (mobile, tablet, desktop)

## 🛠️ Tech Stack
### Frontend
- **HTML5 / CSS3**
- **JavaScript** (DOM manipulation, async/await)
- **Chart.js** (charts)

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (database)
- **Mongoose** (ODM)

## 🌐 External API
Data powered by **CoinGecko API** (no API key required).

- Market Data:  
  `https://api.coingecko.com/api/v3/coins/markets`

- Chart Data:  
  `https://api.coingecko.com/api/v3/coins/{id}/market_chart`

Docs: https://www.coingecko.com/en/api/documentation

---

## 📂 Project Structure

crypto-tracker/
├── index.html      # Main HTML structure
├── style.css       # Styling and responsiveness
├── script.js       # App logic, API calls & chart rendering
└── README.md       # Project documentation

## ⚙️ How It Works
1. **Frontend** requests market and chart data via the **Express API**
2. **Backend** fetches data from **CoinGecko** and returns clean JSON responses
3. **MongoDB** stores user watchlist / saved coins (and optionally cached results)
4. **Chart.js** renders interactive 7-day price charts

---

## 🔌 API Endpoints (Backend)
Base URL: `/api`

### Crypto
- `GET /api/crypto/markets?currency=usd&per_page=20&page=1`
  - Returns top coins market data
- `GET /api/crypto/chart/:id?currency=usd&days=7`
  - Returns chart history for a specific coin

### Watchlist
- `GET /api/watchlist`
  - Get all saved coins
- `POST /api/watchlist`
  - Add a coin to watchlist  
  **Body:**
  ```json
  { "coinId": "bitcoin", "symbol": "btc", "name": "Bitcoin" }
- `DELETE /api/watchlist/:coinId
  - Remove a coin from watchlist
    
### ▶️ Setup & Run Locally

1. Clone the repository
```bash
git clone https://github.com/your-username/crypto-tracker
cd crypto-tracker
```
2. Backend Setup (Express + MongoDB)
```bash
cd server
npm install
Create a .env file inside server/:
env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/crypto_tracker
CLIENT_URL=http://localhost:5500
```
Run backend:

```bash
npm run dev
(or npm start depending on your scripts)
```

3. Frontend Setup
If you're using plain HTML/JS:
open client/index.html in browser
recommended: VS Code Live Server.
If your frontend calls the backend, ensure your API base URL matches:
http://localhost:5000/api

## Authors

**Lalitha N** and
**Pallavi U**

 🌍 Global Geopolitics Dashboard

A comprehensive and interactive platform that visualizes and analyzes global geopolitical data — from international conflicts and alliances to economic indicators and strategic interests.  
This project aims to simplify complex geopolitical dynamics through clean visualizations, curated data, and insightful summaries.

---

 🛠️ Tech Stack

- Frontend: React.js, TailwindCSS, D3.js (for visualizations), React Leaflet / Mapbox GL
- Backend: Node.js, Express.js
- Database: MongoDB Atlas (for curated datasets)
- APIs Used: NewsAPI, GDELT Project, REST Countries, Custom Data Scrapers
- AI/ML: OpenAI / Custom ML Models for regional predictions (optional)
- Deployment:Vercel (Frontend), Render/Railway (Backend), MongoDB Atlas (Database)

---

 🔥 Core Features

- 📰 Real-Time Geopolitical News Aggregation
  - Pulls latest verified articles based on keywords (conflicts, diplomacy, military, etc.)

- 🗺️ Interactive World Map
  - Visualize global hotspots (conflicts, alliances, trade routes) dynamically.
  - Zoom into countries or regions for detailed information.

- 📜 Conflict Timelines
  - View history and evolution of major global and regional conflicts.

- 🛡️ Strategic Data Visualization
  - Show military bases, alliances (e.g., NATO, ASEAN, SCO), and international influence.

- 📈 Economic & Trade Analysis
  - Visual charts of GDP, trade relations, sanctions, and dependencies.

- 🤖 AI-Powered Regional Insights
  - Summarized predictions about potential geopolitical shifts using AI models.

---

 🎯 Purpose

> To bridge the gap between raw geopolitical data and public understanding  
> By offering a clean, interactive tool that's both educational and analytical — ideal for:
- Researchers
- Students
- Policy Enthusiasts
- Strategic Analysts

---

📂 Folder Structure

Frontend
```
/src
  /components
  /pages
  /context
  /services
  /utils
  /visualizations
  App.jsx
  main.jsx
  index.css
```

 Backend
```
/controllers
/newsController.js
/mapDataController.js
/aiInsightsController.js

/routes
/news.js
/mapData.js
/insights.js

/models
/newsModel.js
/regionModel.js

/services
/newsScraper.js
/aiPredictionService.js

/middlewares
/authMiddleware.js (optional)

server.js
```

---

🚀 Setup Instructions

 1. Clone the repository
```bash
git clone https://github.com/your-username/geopolitics-dashboard.git
cd geopolitics-dashboard
```

2. Setup Backend
```bash
cd backend
npm install
```
- Create a `.env` file inside `/backend`:
```env
PORT=5000
MONGO_URI=your_mongodb_uri
NEWS_API_KEY=your_newsapi_key
OPENAI_API_KEY=your_openai_key (optional)
CLIENT_URL=http://localhost:3000
```
- Start the backend server:
```bash
npm run dev
```

3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

---

 🔐 Environment Variables Required

| Key | Description |
|:---|:---|
| MONGO_URI | MongoDB Connection URI |
| NEWS_API_KEY | API Key for real-time news aggregation |
| OPENAI_API_KEY | API Key for AI-driven insights (optional) |
| CLIENT_URL | Frontend URL (for CORS) |

---

 🚀 Deployment
- Frontend → Vercel
- Backend → Render / Railway
- Database → MongoDB Atlas

Update your `.env` files with production URLs once deployed!

---

 📈 Future Improvements

- Full mobile app version (React Native)
- User accounts and saving custom "watchlists"
- Regional "Risk Index" scores
- Add blockchain-based verification for news authenticity
- Live chatrooms for geopolitical discussions
- Advanced machine learning models for predictive analysis

----

 🧑‍💻 Author

This project is completely made by me — Saurabh Shinde.  
I am passionate about global affairs, technology, and building tools that make complex topics easier to understand.  
Feel free to connect with me! 🚀


LinkedIn: [https://www.linkedin.com/in/saurabh-shinde-252b83276/]

---
 📝 License

This project is licensed under the MIT License.

---





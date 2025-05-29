
# Frontend React Application

This is the frontend for your application built using **React**, **Vite**, and **Tailwind CSS**.

---

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:aysswary/expense-tracker-FE.git
   cd expense-tracker-FE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

---

## 👨‍💻 Development

- Start the development server:
  ```bash
  npm run dev
  ```

- Run linter (ESLint):
  ```bash
  npm run lint
  ```

- Build for production:
  ```bash
  npm run build
  ```

- Preview the production build:
  ```bash
  npm run preview
  ```

---

## 🏗️ Project Structure (Sample)
```
/frontend
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── services/   # For Axios API calls
│   ├── utils/
│   │   └── apiPaths.js   # Contains the BASE_URL constant
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🌟 Key Technologies
- **React** – UI framework
- **Vite** – Build tool
- **Tailwind CSS** – Utility-first CSS framework
- **React Router** – Routing library
- **Axios** – HTTP client
- **Recharts** – Charting library
- **React Hot Toast** – Notifications
- **Emoji Picker** – Emoji selection component

---

## 🔐 API Integration
- The API base URL is defined as a constant in `src/utils/apiPaths.js`. Example:
```javascript
export const BASE_URL = "http://localhost:5000/api/v1";
```
- Use this constant when making Axios calls or defining your API endpoints.

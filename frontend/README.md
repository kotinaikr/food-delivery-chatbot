# Frontend Development Flow

## Tech Stack

- React
- Webpack 5
- Babel
- Redux Toolkit
- Redux Saga
- Axios
- SCSS

---

## Frontend Architecture Flow

```text
User Interaction
        ↓
React Components
        ↓
Redux Action Dispatch
        ↓
Redux Saga Middleware
        ↓
Axios API Call
        ↓
FastAPI Backend
        ↓
Gemini LLM + MongoDB
        ↓
API Response
        ↓
Redux Store Update
        ↓
React UI Re-render
```

---

## Frontend Project Structure

Current layout (Redux folders are planned; not all exist yet):

```text
frontend/
│
├── public/
│   └── index.html
│
├── config/
│   └── webpack/
│       ├── webpack.common.js
│       ├── webpack.dev.js
│       └── webpack.prod.js
│
├── src/
│   ├── app/                    (planned)
│   │   └── store.js
│   │
│   ├── redux/                  (planned)
│   │   └── chatbot/
│   │       ├── chatbotSlice.js
│   │       ├── chatbotSaga.js
│   │       ├── chatbotApi.js
│   │       └── chatbotTypes.js
│   │
│   ├── components/
│   │   └── ChatBot/
│   │       ├── ChatBot.jsx
│   │       └── ChatBot.scss
│   │
│   ├── assets/
│   │   └── styles/
│   │       └── global.scss
│   │
│   ├── App.jsx
│   └── index.js
│
├── babel.config.json
├── package.json
└── README.md
```

---

## Frontend Development Steps

### 1. Initialize Frontend Project

```bash
mkdir frontend
cd frontend
npm init -y
```

### 2. Install React

```bash
npm install react react-dom
```

### 3. Install Webpack

```bash
npm install -D webpack webpack-cli webpack-dev-server webpack-merge html-webpack-plugin
```

### 4. Install Babel

```bash
npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader
```

### 5. Install SCSS Support

```bash
npm install -D style-loader css-loader sass sass-loader
```

### 6. Install Redux Toolkit and Saga

```bash
npm install react-redux @reduxjs/toolkit redux-saga
```

### 7. Install Axios

```bash
npm install axios
```

### 8. Install React Router

```bash
npm install react-router-dom
```

---

## Redux Toolkit Flow

```text
Component
    ↓
Dispatch Action
    ↓
Redux Slice
    ↓
Redux Saga
    ↓
API Call
    ↓
Reducer Update
    ↓
Store Update
    ↓
UI Update
```

---

## Redux Saga Flow

```text
Action Dispatch
      ↓
takeLatest()
      ↓
Saga Worker
      ↓
Axios API Call
      ↓
Success / Failure
      ↓
Redux State Update
```

---

## API Integration Flow

```text
React Component
      ↓
Axios Request
      ↓
FastAPI Endpoint
      ↓
Gemini Processing
      ↓
MongoDB Query
      ↓
JSON Response
      ↓
Frontend Rendering
```

---

## SCSS Architecture

Target structure under `src/assets/styles/`:

```text
styles/
│
├── abstracts/
│   ├── _variables.scss
│   └── _mixins.scss
│
├── base/
│   ├── _reset.scss
│   └── _typography.scss
│
├── components/
│
├── layouts/
│
└── global.scss
```

---

## Webpack Configuration Flow

```text
Source Code
     ↓
Webpack Entry (src/index.js)
     ↓
Babel Loader
     ↓
SCSS Loader
     ↓
Bundle Generation
     ↓
Browser Rendering
```

Webpack configs live in `config/webpack/`. Scripts in `package.json`:

- `npm start` → `webpack serve --config config/webpack/webpack.dev.js`
- `npm run build` → `webpack --config config/webpack/webpack.prod.js`

---

## Development Server

Run the frontend:

```bash
npm start
```

Frontend URL:

```text
http://localhost:3000
```

---

## Production Build

```bash
npm run build
```

Generated production files:

```text
dist/
├── bundle.js
└── index.html
```

---

## Frontend Features

- AI Chatbot UI
- Redux State Management (planned)
- Redux Saga Async Handling (planned)
- FastAPI Integration (planned)
- MongoDB Data Rendering (planned)
- SCSS Styling
- Webpack Bundling
- Environment-based Configuration (planned)

---

## Frontend Best Practices

- Component-based architecture
- Centralized state management
- API separation layer
- Modular SCSS structure
- Webpack environment separation
- Reusable Redux slices
- Error handling
- Loading states

---

## Frontend Future Enhancements

- Authentication
- Chat History
- Dark Theme
- Responsive Design
- WebSocket Integration
- Real-time Notifications
- TypeScript Migration
- Unit Testing

---

## Final Frontend Flow Summary

```text
1. User enters question
        ↓
2. React component dispatches Redux action
        ↓
3. Redux Saga intercepts action
        ↓
4. Axios sends request to FastAPI
        ↓
5. FastAPI calls Gemini LLM
        ↓
6. MongoDB data retrieved if needed
        ↓
7. Response returned to frontend
        ↓
8. Redux store updated
        ↓
9. React UI displays chatbot response
```

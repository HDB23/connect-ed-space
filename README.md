# Connect Ed Space

A modern edtech platform that connects students and educators with powerful features for learning, collaboration, and progress tracking.

## Features

- **Interactive Dashboard**: Track your learning progress, courses, and achievements at a glance
- **Translation Tool**: Supports multiple languages to enhance global learning accessibility
- **AI Notes Generator**: Automatically generate concise notes and study materials from lectures
- **Analytics & Insights**: Gain data-driven insights into your learning patterns and performance
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices

## Tech Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- shadcn UI components
- @tanstack/react-query for data fetching
- react-router-dom for navigation

### Backend
- Node.js with Express
- TypeScript
- CORS for cross-origin requests

## Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or bun package manager

## Getting Started

### 1. Clone the Repository

```bash
# Clone the repository
https://github.com/your-username/connect-ed-space.git

# Navigate to the project directory
cd connect-ed-space
```

### 2. Install Dependencies

#### Frontend Dependencies

```bash
# Install frontend dependencies
npm install
```

#### Backend Dependencies

```bash
# Navigate to the backend directory
cd backend

# Install backend dependencies
npm install

# Return to the project root directory
cd ..
```

## Running the Application

You'll need to run both the frontend and backend servers simultaneously.

### Option 1: Run Separately in Different Terminals

#### Terminal 1: Run the Backend

```bash
# Navigate to the backend directory
cd backend

# Start the backend server in development mode
npm run dev

# The backend will run on http://localhost:3001
```

#### Terminal 2: Run the Frontend

```bash
# Make sure you're in the project root directory

# Start the frontend development server
npm run dev

# The frontend will run on http://localhost:5173
```

### Option 2: Build and Run Production Versions

#### Build the Backend

```bash
# Navigate to the backend directory
cd backend

# Build the backend TypeScript code
npm run build

# Start the production backend server
npm start

# The backend will run on http://localhost:3001
```

#### Build the Frontend

```bash
# Make sure you're in the project root directory

# Build the frontend code
npm run build

# Preview the production build
npm run preview

# The frontend preview will run on http://localhost:4173
```

## API Endpoints

The backend provides the following API endpoints:

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics
- `GET /api/dashboard/courses` - Get course information
- `GET /api/dashboard/live-classes` - Get live class details

### Translation
- `GET /api/translation/languages` - Get supported languages
- `GET /api/translation` - Translate text (requires `text` and `targetLanguage` query params)

### AI Notes
- `GET /api/ai-notes/lecture` - Get lecture data
- `GET /api/ai-notes` - Get AI-generated notes (supports `type` query param for filtering)

### Analytics
- `GET /api/analytics/performance` - Get overall performance data
- `GET /api/analytics/course-progress` - Get course progress tracking
- `GET /api/analytics/weekly-activity` - Get weekly activity data

## Testing the API

You can test the API endpoints using tools like curl, Postman, or directly in your browser.

Example with curl:
```bash
# Test the API test endpoint
curl http://localhost:3001/api/test

# Get dashboard statistics
curl http://localhost:3001/api/dashboard/stats
```

## Troubleshooting

- If the backend fails to start, ensure you have the correct Node.js version and all dependencies are installed
- If you encounter CORS errors, make sure the backend CORS configuration is correctly set up
- For TypeScript compilation errors, run `npm run build` in the backend directory to see detailed error messages

## License

[MIT](LICENSE)

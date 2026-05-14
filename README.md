# Running Mileage Tracker 🏃

A simple and beautiful React application to track your running mileage, monitor your progress, and celebrate your fitness goals.

## Features

- 📝 **Log Runs** - Record date, distance, duration, and notes for each run
- 📊 **Statistics** - View total runs, distance, duration, average pace, and weekly totals
- 🏃 **Run History** - Browse all your logged runs with calculated pace and speed
- 💾 **Data Persistence** - Your runs are saved locally using browser's localStorage
- 🌐 **Responsive Design** - Works great on desktop, tablet, and mobile devices
- 🌓 **Dark/Light Mode** - Automatically adapts to your system preferences

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gpalerm/test.git
cd test
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173/test/`

## Usage

1. **Log a Run**
   - Enter the date, distance (in miles), and duration (in minutes)
   - Optionally add notes about your run
   - Click "Log Run" to save

2. **View Statistics**
   - Check the "Statistics" section to see running metrics
   - Total runs, distance, duration, average pace, and weekly mileage

3. **Manage Runs**
   - View all logged runs in "Run History"
   - Delete runs by clicking the ✕ button

## Building for Production

```bash
npm run build
```

## Deploy to GitHub Pages

The app automatically deploys to GitHub Pages when you push to the main branch.

Your site: `https://gpalerm.github.io/test/`

## Technologies

- React 18
- TypeScript
- Vite
- CSS3
- localStorage

## License

MIT

# Fitro - Fitness Tracking Application

A modern, feature-rich fitness tracking application built with React and Redux that helps users track their workouts, monitor progress, and achieve their fitness goals.

## Contributer members:

### 1- Abdelrahman Mohamad Sayed: abdomohmed768@gmail.com

### 2- Hessien Adel Mohamed: helwaly75@gmail.com

### 3- Gehad Omar Alansary: gehadansary936@gmail.com

### 4- Doaa Ali Mohamad : doaayounisjobs@gmail.com

### 5- Omar Karim Amer : omarkarim20051110@gmail.com

## Features

- 📊 Interactive Dashboard with real-time workout statistics
- 🏃‍♂️ Multiple workout type support (Running, Cycling, Swimming, Walking, Gym)
- 📈 Visual progress tracking with Charts and Progress bars
- 🌓 Dark/Light theme support
- 📱 Responsive design for all devices
- 🔐 User authentication and profile management
- 📅 Workout planning and scheduling
- 🔄 Real-time data synchronization
- 📊 Calorie tracking and burn rate calculations

## Technologies Used

### Frontend

- React (v19.0.0)
- Redux Toolkit (v2.7.0)
- React Router (v7.5.1)
- TailwindCSS (v4.1.4)
- Chart.js (v4.4.9) with react-chartjs-2 (v5.3.0)
- React Circular Progressbar (v2.2.0)
- FontAwesome Icons (v6.7.2)
- React Toastify (v11.0.5)
- date-fns (v4.1.0)

### Backend

- Supabase (v2.49.4) for backend services
  - Authentication
  - Real-time database
  - Data storage

### Development Tools

- Vite (v6.1.0)
- ESLint (v9.19.0)
- PostCSS
- Node.js

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/fitness-app.git
cd fitness-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_anon_key
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
fitness-app/
├── src/
│   ├── api/           # API integration and Supabase client
│   ├── components/    # Reusable React components
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   ├── store/         # Redux store and slices
│   │   └── slices/    # Redux Toolkit slices
│   ├── styles/        # Global styles and theme
│   └── utils/         # Utility functions
├── public/            # Static assets
└── vite.config.js     # Vite configuration
```

## Features in Detail

### Dashboard

- Overview of fitness metrics
- Weekly progress tracking
- Activity distribution charts
- Calorie burn statistics

### Workout Tracking

- Multiple activity types support
- Duration and distance tracking
- Calorie burn calculations
- Progress visualization

### User Profile

- Personal information management
- Workout history
- Achievement tracking
- Goal setting

### Theme Support

- Light and dark mode
- System preference detection
- Persistent theme selection

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Team Members

1. Abdelrahman Mohamad Sayed - abdomohmed768@gmail.com
2. Hessien Adel Mohamed - helwaly75@gmail.com
3. Gehad Omar Alansary - gehadansary936@gmail.com
4. Doaa Ali Mohamad - doaayounisjobs@gmail.com
5. Omar Karim Amer - omarkarim20051110@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- FontAwesome for the icons
- TailwindCSS for the styling system
- Chart.js for the visualization libraries
- Supabase for the backend infrastructure

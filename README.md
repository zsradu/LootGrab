# Loot Grab

A 3D web-based loot collection game where players compete against AI bots to collect loot while avoiding the menacing Greed Bot.

## Features

- 3D graphics using Three.js
- Responsive design for both desktop and mobile
- Real-time multiplayer-like experience with AI bots
- Dynamic loot spawning system
- Special events like Loot Frenzy
- Sound effects and visual feedback
- Leaderboard system

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/loot-grab.git
cd loot-grab
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:5173`

## How to Play

### Controls

#### Desktop
- WASD or Arrow Keys: Move
- Spacebar: Jump

#### Mobile
- Virtual joystick (left side): Move
- Jump button (right side): Jump

### Game Rules

1. Enter your username and click "Join Game"
2. Collect loot (coins, gems, and chests) to earn points
3. Avoid the Greed Bot - if it catches you, it steals all your points
4. During Greed Rush, chase the Greed Bot to recover half of your stolen points
5. At 1:50, Loot Frenzy begins - more loot spawns and the Greed Bot slows down
6. Win by reaching 30 points or having the highest score when the round ends (2:00)

### Scoring

- Coins: 1 point
- Gems: 5 points
- Chests: 10 points

## Development

### Project Structure

```
loot-grab/
├── src/
│   ├── audio/         # Audio management
│   ├── entities/      # Game entities (Player, GreedBot, Loot, Arena)
│   ├── game/          # Main game logic
│   ├── input/         # Input handling
│   └── ui/            # User interface
├── public/
│   └── sounds/        # Sound effects
├── index.html
└── package.json
```

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technologies Used

- Three.js for 3D graphics
- Vite for build tooling
- Howler.js for audio
- GSAP for animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

MIT License - feel free to use this project for your own purposes.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 
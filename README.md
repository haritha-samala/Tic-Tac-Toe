# 🎮 Tic Tac Toe Game

A stylish implementation of the classic Tic Tac Toe game featuring a custom background image and elegant gradient styling. Challenge your friends to a game of X's and O's in this beautifully designed version.

## ✨ Features

- 📱 Responsive design that works on all devices
- 🎨 Custom background image
- 🌈 Gradient-styled header and buttons
- ⏸️ Pause functionality
- 🎯 Player turn indicators
- 🏆 Victory screen with restart option
- 🎭 X and O markers with hover effects
- 🔄 Smooth transitions and animations

## 🛠️ Project Structure

```
tic-tac-toe/
│
├── index.html
├── src/
│   ├── images/
│   │   └── tb.jpg         # Background image
│   ├── styles.css         # Game styles
│   │
|   ├── index.html         # Main HTML file
│   └── index.mjs          # Game logic
│
├── assets/
│   └── preview.png        # Game preview image
└── README.md              # This file

```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Basic understanding of web development (for modifications)

### Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:

```bash
cd tic-tac-toe
```

3. Open `index.html` in your browser

## 🎮 How to Play

1. Open the game in your browser
2. Player 1 uses 'X' and Player 2 uses 'O'
3. Take turns clicking empty cells to place your marker
4. First player to get 3 in a row (horizontal, vertical, or diagonal) wins
5. Use the pause button to pause the game at any time

## 🎨 Styling Details

### Color Scheme

- Header gradient: `#ad5389` to `#3c1053`
- Pause button gradient: `#00d2ff` to `#3a7bd5`
- X marker: Red
- O marker: Blue with light gray center

### Custom Properties

```css
:root {
  --cell-size: 100px;
  --mark-size: calc(var(--cell-size) * 0.9);
}
```

### Background

- Uses custom image: `tb.jpg`
- Size: `100vw 137vh`
- Clip: `border-box`

## 🔧 Customization

### Changing the Background

1. Replace `tb.jpg` in the `src/images` directory
2. Update CSS background properties if needed:

```css
body {
  background: url("../src/images/your-image.jpg");
  background-size: 100vw 137vh;
}
```

### Modifying Colors

Update gradient values in CSS:

```css
/* Header gradient */
background: linear-gradient(to top, #ad5389, #3c1053);

/* Button gradient */
background: linear-gradient(145deg, #00d2ff, #3a7bd5);
```

### Adjusting Grid Size

Modify the root variables:

```css
:root {
  --cell-size: 100px; /* Change this value */
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📝 Key Component Details

### Pause Button

```css
#pauseBtn {
  /* Styling for pause functionality */
  background: linear-gradient(145deg, #00d2ff, #3a7bd5);
  border-radius: 50px;
  margin: 1vh 40vw;
}
```

### Game Board

```css
.board {
  width: 100vw;
  height: calc(100vh - 200px);
  display: grid;
  grid-template-columns: repeat(3, auto);
}
```

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

The game adapts to different screen sizes while maintaining playability:

- Fluid grid layout
- Responsive background image
- Adaptive button positioning
- Flexible cell sizing

## ⚙️ Technical Details

- Uses CSS Grid for game board layout
- Flexbox for general positioning
- CSS custom properties for easy customization
- CSS transforms for animations
- Background image optimization for performance

## 🆘 Troubleshooting

Common issues and solutions:

1. Background image not loading

   - Check image path in CSS
   - Verify image exists in correct directory

2. Responsive issues

   - Ensure viewport meta tag is present
   - Check media queries if added

3. Style conflicts
   - Inspect elements using browser dev tools
   - Check CSS specificity

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by classic Tic Tac Toe games
- Modern UI design principles
- Community feedback and suggestions

## 📞 Contact

Your Name - [Naga Haritha Samala-samala.snh@gmail.com]
Project Link: [your-repository-url]

---

Made with ❤️ by Naga Haritha Samala

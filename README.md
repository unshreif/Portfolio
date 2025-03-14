# Modern Portfolio Website

A cutting-edge portfolio website built with Next.js, Three.js, and Framer Motion. This project showcases a modern, interactive, and visually appealing portfolio with 3D elements, smooth animations, and a responsive design.

## Features

- **Interactive 3D Elements**: Immersive 3D visualizations using Three.js and React Three Fiber
- **Smooth Animations**: Engaging animations and transitions with Framer Motion and GSAP
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, minimalist, and futuristic design aesthetic
- **Performance Optimized**: Fast loading times and smooth interactions
- **Accessibility**: Accessible to all users, including those with disabilities

## Technologies Used

- **Frontend**:
  - Next.js 14 (App Router)
  - React 18
  - TypeScript
  - Tailwind CSS
  - Three.js / React Three Fiber
  - Framer Motion
  - GSAP

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/modern-portfolio.git
   cd modern-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
/
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js app router
│   ├── components/    # React components
│   │   ├── 3d/        # 3D components using Three.js
│   │   ├── layout/    # Layout components
│   │   ├── sections/  # Page sections
│   │   └── ui/        # UI components
│   └── styles/        # Global styles
└── ...
```

## Customization

To customize this portfolio for your own use:

1. Update the personal information in the components
2. Replace the placeholder images with your own
3. Modify the color scheme in `globals.css`
4. Add your own projects to the `ProjectsSection.tsx` file

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Three.js](https://threejs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)

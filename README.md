# David Murphy Portfolio Website

This is a modern, responsive portfolio website built with React and Tailwind CSS, featuring a dark mode toggle and sections to showcase skills, projects, and resume.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Dark Mode Toggle**: Switch between light and dark themes
- **Resume Integration**: View and download resume directly from the site
- **Project Showcase**: Display GitHub projects with descriptions and links
- **Skills & Experience**: Highlight technical skills and work experience

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment to GitHub Pages

1. Update the `homepage` field in `package.json`:
   ```json
   "homepage": "https://yourusername.github.io"
   ```

2. Install GitHub Pages package:
   ```
   npm install --save-dev gh-pages
   ```

3. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     ...
   }
   ```

4. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

## Customization

- Update personal information in `src/pages/Home.tsx`
- Modify color scheme in `tailwind.config.js`
- Add or remove sections as needed

## Built With

- [React](https://reactjs.org/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Router](https://reactrouter.com/) - Navigation
- [React PDF](https://react-pdf.org/) - PDF viewing

## License

This project is open source and available under the [MIT License](LICENSE).
# Website

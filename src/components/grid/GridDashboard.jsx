// Create a dashboard layout with:
// Header (spans full width)
// Sidebar (fixed width)
// Main content area
// Footer (spans full width)
// Requirements:
// Use grid-template-areas for layout
// Make it responsive (sidebar should move to top on mobile)
// Use minmax() for responsive sizing
// Add some content in each section
// Use different colors for each section
// Add proper spacing between sections

import './Grid.css';

const GridDashboard = () => {
  return (
    <div className="dashboard">
      <header>header</header>
      <aside>sidebar</aside>
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
};

export default GridDashboard;

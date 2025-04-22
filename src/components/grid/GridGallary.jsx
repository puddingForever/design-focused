// Create a new component called GridGallery.jsx with these requirements:
// Create a responsive image gallery where:
// Images have different heights (like Pinterest)
// Images should maintain their aspect ratio
// Gallery should be responsive (3 columns on desktop, 2 on tablet, 1 on mobile)
// Add hover effects on images
// Add some text overlay on hover
// Specific Requirements:
// Use auto-fit or auto-fill with minmax()
// Use grid-auto-rows for different height items
// Add proper spacing between items
// Make it responsive using media queries
// Add some sample images (you can use placeholder images from https://picsum.photos)

import './Grid.css';

const GridGallery = () => {
  return (
    <div className="gallary">
      <div className="gallery-item">
        <img src="https://picsum.photos/400/200" alt="Gallery item 1" />
        <div className="overlay">
          <h3>Image Title 1</h3>
          <p>Description here</p>
        </div>
      </div>
      <div className="gallery-item">
        <img src="https://picsum.photos/400/600" alt="Gallery item 2" />
        <div className="overlay">
          <h3>Image Title 2</h3>
          <p>Description here</p>
        </div>
      </div>
      <div className="gallery-item">
        <img src="https://picsum.photos/400/300" alt="Gallery item 3" />
        <div className="overlay">
          <h3>Image Title 3</h3>
          <p>Description here</p>
        </div>
      </div>
      <div className="gallery-item">
        <img src="https://picsum.photos/400/1000" alt="Gallery item 4" />
        <div className="overlay">
          <h3>Image Title 4</h3>
          <p>Description here</p>
        </div>
      </div>
      <div className="gallery-item">
        <img src="https://picsum.photos/400/400" alt="Gallery item 5" />
        <div className="overlay">
          <h3>Image Title 5</h3>
          <p>Description here</p>
        </div>
      </div>
      <div className="gallery-item">
        <img src="https://picsum.photos/400/500" alt="Gallery item 6" />
        <div className="overlay">
          <h3>Image Title 6</h3>
          <p>Description here</p>
        </div>
      </div>
      <div className="gallery-item">
        <img src="https://picsum.photos/400/800" alt="Gallery item 6" />
        <div className="overlay">
          <h3>Image Title 7</h3>
          <p>Description here</p>
        </div>
      </div>
    </div>
  );
};

export default GridGallery;

// Home.js
import React from 'react';
import './Home.css'; // Import the CSS file
import Footer from '../Footer/Footer';

const Home = () => {
  // Use require.context to automatically import all images from the folder
  const importAll = (r) => {
    return r.keys().map(r);
  };

  const images = importAll(require.context('../../Assets/Images', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img src={image} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
        </div>
      ))}
    </div>
  );
};

export default Home;


import React from 'react';
import './index.css';

/**
 * ContentSection component
 */
const ContentSection = ({type, imageURI = '', text = '', title = '', leftToRight = true, url = ''}) => {
  const direction = leftToRight ? 'left' : 'right';

  return (
    <div className={`content-section ${type} ${direction}`}>
      {imageURI && <img src={imageURI} alt="some alt text" />}
      {(title && text) &&
        <div className="text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      }
      {url && <button>Refresh</button>}
    </div>
  );
}

export default ContentSection;

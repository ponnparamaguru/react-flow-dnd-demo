import React, { useState } from 'react';
import './index.css';
import Dad from './assets/dad.png';
import Mom from './assets/mom.png';
import Son from './assets/son.png';
import Daughter from './assets/daughter.png';
import Uncle from './assets/uncle.png';
import Nerd from './assets/nerd.png';

const ImgSidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const onDragStart = (event, imageUrl) => {
    event.dataTransfer.setData('imageSrc', imageUrl);
  };

  return (
    <>
      <div className={`imgsidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>Image Gallery</h2>
          <span className="toggle-button" onClick={toggleSidebar}>
            {isOpen ? '✖' : '▶'}
          </span>
        </div>
        {isOpen && (
          <div className="image-grid">
            <img
              src={Dad}
              alt="Dad"
              draggable
              onDragStart={(event) => {
                event.dataTransfer.setData('text/plain', Dad);
                onDragStart(event, Dad); 
              }}
            />
            <img
              src={Mom}
              alt="Mom"
              draggable
              onDragStart={(event) => {
                event.dataTransfer.setData('text/plain', Mom);
                onDragStart(event, Mom); 
              }}
            />
            <img
              src={Son}
              alt="Son"
              draggable
              onDragStart={(event) => {
                event.dataTransfer.setData('text/plain', Son);
                onDragStart(event, Mom); 
              }}
            />
            <img
              src={Daughter}
              alt="Daughter"
              draggable
              onDragStart={(event) => {
                event.dataTransfer.setData('text/plain', Daughter);
                onDragStart(event, Daughter); 
              }}
            />
            <img
              src={Uncle}
              alt="Uncle"
              draggable
              onDragStart={(event) => {
                event.dataTransfer.setData('text/plain', Uncle);
                onDragStart(event, Uncle); 
              }}
            />
            <img
              src={Nerd}
              alt="Nerd"
              draggable
              onDragStart={(event) => {
                event.dataTransfer.setData('text/plain', Nerd);
                onDragStart(event, Nerd); 
              }}
            />
          </div>
        )}
      </div>
      <button
        className="sidebar-open-button"
        onClick={() => setIsOpen(true)}
        style={{ display: isOpen ? 'none' : 'block' }}
      >
        Drag Image
      </button>
    </>
  );
};

export default ImgSidebar;

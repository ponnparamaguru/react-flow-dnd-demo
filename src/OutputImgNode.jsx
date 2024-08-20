import React, { useCallback, useState } from 'react';
import { Handle, Position } from '@xyflow/react';

function OutputImgNode({ data, isConnectable }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDrop = (event) => {
    event.preventDefault(); 
    event.stopPropagation();
    setIsDragging(false);

    const imageUrl = event.dataTransfer.getData('imageSrc');
    if (imageUrl) {
      setImageSrc(imageUrl);
    }
  };

  const onChange = useCallback((evt) => {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result);
      reader.readAsDataURL(file);
    }
  }, []);

  const onCancel = useCallback(() => {
    setImageSrc(null);
  }, []);

  return (
    <div
      className={`image-uploader ${isDragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <div className="image-container">
        {!imageSrc ? (
          <label htmlFor="image">
            <span className="upload-text">
              {isDragging ? 'Drop Image Here' : 'Output Image'}
            </span>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={onChange}
              style={{ display: 'none' }}
            />
          </label>
        ) : (
          <div className="uploaded-image">
            <img src={imageSrc} alt="Uploaded" />
            <button className="cancel-button" onClick={onCancel}>
                ✖
            </button>
          </div>
        )}
      </div>

      
      
      <Handle type="target" position={Position.top} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default OutputImgNode;

import React from 'react';
import { useDnD } from './DnDContext';

export default () => {
  const [_, setType] = useDnD();

  const onDragStart = (event, nodeType) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'inputImg')} draggable>
        Input Node
      </div>
      <div className="dndnode imageUploader" onDragStart={(event) => onDragStart(event, 'imgUpdater')} draggable>
        Image Uploader Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'outputImg')} draggable>
        Output Node
      </div>
    </aside>
  );
};

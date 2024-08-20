import React, { useState } from 'react';
import { getBezierPath, getEdgeCenter } from '@xyflow/react';

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style = {},
  data,
  markerEnd,
}) => {
  const [label, setLabel] = useState(data?.label || '');

  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
  
  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const onLabelChange = (event) => {
    setLabel(event.target.value);
  };

  return (
    <>
      <path id={id} className="react-flow__edge-path" d={edgePath} style={style} markerEnd={markerEnd} />
      <foreignObject width={100} height={30} x={edgeCenterX - 15} y={edgeCenterY - 10} style={{ overflow: 'visible' }}>
        <input
          value={label}
          onChange={onLabelChange}
          className="edge-label-input"
          style={{
            border: '1px solid pink',
            borderRadius: '5px',
            padding: '3px',
            textAlign: 'center',
            width: '25%',
          }}
        />
      </foreignObject>
    </>
  );
};

export default CustomEdge;

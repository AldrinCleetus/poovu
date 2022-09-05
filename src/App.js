import React, { useState, useRef } from "react";
import { Stage, Layer, Circle, Text, Group } from "react-konva";
import Square from "./Components/Square";

export default function App() {
 
  const [allSquares,setSquares] = useState([
    {
      x: 150,
      y: 150,
      width: 100,
      height: 100,
      fill: 'lightgreen',
      id: 'rectd',
    },
    {
      x: 500,
      y: 200,
      width: 100,
      height: 100,
      fill: 'lightblue',
      id: 'rect3',
    } 
  ])
  


  return (
    <div>
      <Stage 
      width={window.innerWidth} 
      height={window.innerHeight} >
      <Layer>
      

      {allSquares.map( (el,idx)=>{
        return(
          <Square
          shapeProperties={el}
          id={el.id + idx}
          isSelected ={ false}
          onChange ={(newAttr)=>{
            const sqrs = allSquares.slice()
            sqrs[idx] = newAttr
            setSquares(sqrs)
          }}
          ></Square>
        )
      } )}


      </Layer>
    </Stage>
    </div>
    
  );
}

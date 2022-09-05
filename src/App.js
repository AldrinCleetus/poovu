

import React, { useState, useRef } from "react";
import { Stage, Layer, Circle, Text, Group } from "react-konva";

export default function App() {
  const [circles, setCircles] = useState([]);
  const stageRef = useRef(null);



  const [isDrawing,setIsDrawing] = useState(false)
  
  const [startingPos,setStartingPos] = useState([0,0])
  const [finalPos,setFinalPos] = useState([0,0])




  const generateCircleAt = (x,y,r)=>{
    const newCirle = {
      x:x,
      y:y,
      radius:r,
      fill:"lightgreen"
    }
    const newCirles = [newCirle,...circles]
    setCircles(newCirles)
  }

  return (
    <div>
      <Stage width={window.innerWidth} height={window.innerHeight} ref={stageRef}
      


      onClick={ (e) =>{
        generateCircleAt(e.evt.clientX,e.evt.clientY,20)

        console.log("clicking")
      }}

      // onDragStart = {e=>{
      //   setStartingPos([e.evt.clientX,e.evt.clientY])
      //   console.log("starting drag")
      // }}

      // onDragEnd = {e=>{
      //   setFinalPos([e.evt.clientX,e.evt.clientY])
      //   const radius = Math.sqrt(((finalPos[0]-startingPos[0])**2)-(finalPos[1]-startingPos[1])**2)

      //   generateCircleAt(startingPos[0],startingPos[1],radius)
      // }}
      
      >
      <Layer>

        <Circle
        x={500}
        y={300}
        radius={200}
        fill={"lightblue"}
        
        ></Circle>
        
        {circles.map(eachCircle =>{
          return(
            <Circle
            x={eachCircle.x}
            y={eachCircle.y}
            radius={eachCircle.radius}
            fill={eachCircle.fill}

            draggable
            
            onDragStart = {e=>{
              // setStartingPos([e.evt.clientX,e.evt.clientY])
              console.log("starting drag")
            }}
            ></Circle>
          )
        })}

        
        
      </Layer>
    </Stage>
    </div>
    
  );
}

import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Circle, Text, Group } from "react-konva";
import Square from "./Components/Square";

export default function App() {
 
  const [allSquares,setSquares] = useState([])

  const [selectedShape,setSelectedShape] = useState(null)
  const [selectedTool, setSelectedTool] = useState("square")
  

  useEffect(()=>{
    console.log(selectedShape)
  },[selectedShape])



  const placeShape = (e)=>{

    const clickedOnEmpty = e.target === e.target.getStage();

    if(clickedOnEmpty){
      setSelectedShape(null)
      console.log("clicked on nothing")
    }


    
    if(selectedTool === "square" && clickedOnEmpty){
      setSquares((prev) =>{
        return([
          ...prev,
          {
            x: e.evt.clientX - 100/2,
            y: e.evt.clientY - 100/2,
            width: 100,
            height: 100,
            fill: 'lightblue',
            id: 'das' + Math.random(),
          } 
        ])
      })
    }

    
  }

  


  return (
    <div>
      <Stage 
      width={window.innerWidth} 
      height={window.innerHeight}
      
      onMouseDown={placeShape}

      >
      <Layer>
      

      {allSquares.map( (el,idx)=>{
        return(
          <Square
          shapeProperties={el}
          id={el.id + idx}
          isSelected ={ el.id === selectedShape}
          onChange ={(newAttr)=>{
            const sqrs = allSquares.slice()
            sqrs[idx] = newAttr
            setSquares(sqrs)
          }}
          onSelect={()=>{
            setSelectedShape(allSquares[idx].id)
          }}


          ></Square>
        )
      } )}


      </Layer>
    </Stage>
    </div>
    
  );
}

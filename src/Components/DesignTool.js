import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Text, Group } from "react-konva";
import Square from "../Utilities/Square";
import Circles from "../Utilities/Circles";

const DesignTool = () => {
    const [allSquares,setSquares] = useState([])
    const [allCircles,setCircle] = useState([])

    const [selectedShape,setSelectedShape] = useState(null)
    const [selectedTool, setSelectedTool] = useState("square")


    const placeShape = (e)=>{

    const clickedOnEmpty = e.target === e.target.getStage();

    if(clickedOnEmpty){
        setSelectedShape(null)
        console.log("clicked on nothing")
    }



    if(selectedTool === "square"){
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

    if(selectedTool === "circle"){
        setCircle((prev) =>{
        return([
            ...prev,
            {
            x: e.evt.clientX,
            y: e.evt.clientY - 20,
            radius: 20,
            fill: 'lightblue',
            id: 'circle' + Math.random(),
            } 
        ])
        })
    }


    }





    return ( 
        <React.Fragment>
            <div>
        <button
        onClick={()=>{
          setSelectedTool("square")
        }}> Square</button>
        <button
        
        onClick={()=>{
         setSelectedTool("circle")
        }}> Circle </button>
        <button
        
         onClick={()=>{
          setSelectedTool(null)
         }}> Select </button>

      </div>
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
          id={el.id}
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

      {allCircles.map( (el,idx)=>{
              return(
                <Circles
                shapeProperties={el}
                id={el.id}
                isSelected ={ el.id === selectedShape}
                onChange ={(newAttr)=>{
                  const circ = allCircles.slice()
                  circ[idx] = newAttr
                  setCircle(circ)
                }}
                onSelect={()=>{
                  setSelectedShape(allCircles[idx].id)
                }}


                ></Circles>
              )
            } )}


      </Layer>
    </Stage> 
        </React.Fragment>
     );
}
 
export default DesignTool;
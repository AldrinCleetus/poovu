import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Text, Group } from "react-konva";
import Square from "../Utilities/Square";
import Circles from "../Utilities/Circles";

const DesignKanvas = ({currentTool,shapeProperties,currentColor}) => {

    const [allSquares,setSquares] = useState([])
    const [allCircles,setCircle] = useState([])

    const [selectedShape,setSelectedShape] = useState(null)

    const stageRef = useRef()

    const exportImage = ()=>{
      const URI = stageRef.current.toDataURL()
    }
    

    const placeShape = (e)=>{

      const clickedOnEmpty = e.target === e.target.getStage();

      if(clickedOnEmpty){
          setSelectedShape(null)
          console.log("clicked on nothing")
      }


      // Fix this later
      const clearEverything = ()=>{
        setSquares([])
        setCircle([])
      }
      if(currentTool === "clear"){
        clearEverything()
      }

     

      

      if(currentTool === "square" && clickedOnEmpty){
          
        
        
        setSquares((prev) =>{
          return([
              ...prev,
              {
              x: e.target.getStage().getPointerPosition().x - Number(shapeProperties.width)/2,
              y: e.target.getStage().getPointerPosition().y - Number(shapeProperties.height)/2,
              width: Number(shapeProperties.width),
              height: Number(shapeProperties.height),
              fill: currentColor,
              id: 'das' + Math.random(),
              } 
          ])
          })
      }

    if(currentTool === "circle" && clickedOnEmpty){
        setCircle((prev) =>{
        return([
            ...prev,
            {
            x: e.target.getStage().getPointerPosition().x,
            y: e.target.getStage().getPointerPosition().y,
            radius: Number(shapeProperties.radius),
            fill: currentColor,
            id: 'circle' + Math.random(),
            } 
        ])
        })
    }


    }

    return ( 
        <Stage 
      width={700} 
      height={700}
      onClick={placeShape}
      ref={stageRef}
      >
      <Layer
      >

      <Circles
                      shapeProperties={{
                        x: 350,
                        y: 350,
                        radius: 200,
                        fill: 'grey',
                        id: 'circleMain',
                        }}
                      id={"circleMain"}
                      isSelected ={ "circleMain" === selectedShape}
                      onSelect={()=>{
                        setSelectedShape("circleMain")
                      }}


                      ></Circles>
      

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
     );
}
 
export default DesignKanvas;
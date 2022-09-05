import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Text, Group } from "react-konva";
import Square from "./Utilities/Square";
import Circles from "./Utilities/Circles";
import LandingPage from "./Components/LandingPage";
import 'bulma/css/bulma.min.css';
import "./styles.scss"

export default function App() {
 
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
    <div>
      <LandingPage></LandingPage>
    </div>
    
  );
}

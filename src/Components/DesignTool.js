import React, { useState, useRef, useEffect } from "react";
import DesignKanvas from "./DesignKanvas";
import ToolBar from "./ToolBar";
import ToolBarProperties from "./ToolBarProperties";

const DesignTool = () => {
    
    const [selectedTool,setSelectedTool] = useState("square")
    const [shapeProperties,setShapeProperties] = useState({
      height:"50",
      width:"50",
      radius:"20"
  })

  const [currentColor,setCurrentColor] = useState('lightblue')

  const [downloadImage,setDownloadImage] = useState(false)


    return ( 
        <React.Fragment>


        <div className="hero-body has-background-info ">

        
        <div className="container is-fluid">
          <div className="columns">
            <ToolBar setTool={setSelectedTool}></ToolBar>
            <div class="column has-background-black">
              <DesignKanvas currentTool={selectedTool} shapeProperties={shapeProperties} currentColor={currentColor} downloadImage={downloadImage} setDownloadImage={setDownloadImage}></DesignKanvas>
            </div>
            <div class="column ">
              <ToolBarProperties setProperty={setShapeProperties} currentTool={selectedTool} setCurrentColor={setCurrentColor} setDownloadImage={setDownloadImage}></ToolBarProperties>
            </div>
          
          </div>




          </div>
          
        </div>
       
      
        </React.Fragment>
     );
}
 
export default DesignTool;
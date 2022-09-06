import React, { useState, useRef, useEffect } from "react";
import DesignKanvas from "./DesignKanvas";
import ToolBar from "./ToolBar";
import ToolBarProperties from "./ToolBarProperties";

const DesignTool = () => {
    
    const [selectedTool,setSelectedTool] = useState("square")
    const [shapeProperties,setShapeProperties] = useState({
      height:"10",
      width:"10",
      radius:"10"
  })

    return ( 
        <React.Fragment>

        <div className="hero-body has-background-info ">


        <div className="container is-fluid">
          <div className="columns">
            <ToolBar setTool={setSelectedTool}></ToolBar>
            <div class="column has-background-black">
              <DesignKanvas currentTool={selectedTool} shapeProperties={shapeProperties}></DesignKanvas>
            </div>
            <div class="column ">
              <ToolBarProperties setProperty={setShapeProperties}></ToolBarProperties>
            </div>
          
          </div>




          </div>

        </div>
      
        </React.Fragment>
     );
}
 
export default DesignTool;
import React, { useState, useRef, useEffect } from "react";
import DesignKanvas from "./DesignKanvas";
import ToolBar from "./ToolBar";

const DesignTool = () => {
    


    return ( 
        <React.Fragment>

        <div className="hero-body has-background-info ">


        <div className="container is-fluid">
          <div className="columns">
          <ToolBar></ToolBar>
          <div class="column">
            <DesignKanvas></DesignKanvas>
          </div>
          <div class="column has-background-primary">
            Third column
          </div>
          
        </div>




        </div>

        </div>
      
        </React.Fragment>
     );
}
 
export default DesignTool;
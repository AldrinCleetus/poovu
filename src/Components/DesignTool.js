import React, { useState, useRef, useEffect } from "react";
import DesignKanvas from "./DesignKanvas";

const DesignTool = () => {
    


    return ( 
        <React.Fragment>
        {/* <div>
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

      </div> */}

      {/* <DesignKanvas></DesignKanvas> */}

        <div className="hero-body has-background-info ">


        <div className="container is-fluid">
          <div className="columns">
          <div class="column is-2">
          <button className="button is-white is-rounded CButton pop p-5 my-3 mx-6">Button</button>
          <button className="button is-white is-rounded CButton pop p-5 my-3 mx-6">Button</button>
          <button className="button is-white is-rounded CButton pop p-5 my-3 mx-6">Button</button>
          <button className="button is-white is-rounded CButton pop p-5 my-3 mx-6">Button</button>
          <button className="button is-white is-rounded CButton pop p-5 my-3 mx-6">Button</button>
          </div>
          <div class="column">
            <DesignKanvas></DesignKanvas>
          </div>
          <div class="column">
            Third column
          </div>
          <div class="column">
            Fourth column
          </div></div> 
        </div>




        </div>
      
        </React.Fragment>
     );
}
 
export default DesignTool;
import React, { useEffect, useRef } from "react";
import {Circle, Transformer} from "react-konva"




const Circles = ({shapeProperties,isSelected,onChange,onSelect}) => {


    // Reference for transformer
    const trRef = useRef()
    const shapeRef = useRef()

    // Everytime its selected set the reference to current
    useEffect(()=>{
        if(isSelected){
            console.log(shapeRef)
            trRef.current.nodes([shapeRef.current])
            trRef.current.getLayer().batchDraw()
        }
    })

    return ( 
        <React.Fragment>
            <Circle
                x= {shapeProperties.x}
                y= {shapeProperties.y}
                radius={shapeProperties.radius}
                ref={shapeRef}
                id= {shapeProperties.id}
                
                draggable={true}
                fill={isSelected ? "lightgreen" : "lightblue"}
                onDragEnd={e=>{
                    onChange({
                        ...shapeProperties,
                        x: e.target.x(),
                        y: e.target.y()

                    })
                }}
                onClick={onSelect}
                onTap={onSelect}
                
            >
            </Circle>

            {isSelected && <Transformer
            ref={trRef}
            boundBoxFunc={(oldBox, newBox) => {
                // limit resize
                if (newBox.width < 5 || newBox.height < 5) {
                  return oldBox;
                }
                return newBox;
              }}

            ></Transformer>}
        </React.Fragment>
        
     );
}
 
export default Circles;
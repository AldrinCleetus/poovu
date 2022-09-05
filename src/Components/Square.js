import React, { useEffect, useRef } from "react";
import {Rect, Transformer} from "react-konva"




const Square = ({shapeProperties,isSelected,onChange}) => {


    // Reference for transformer
    const trRef = useRef()
    const shapeRef = useRef()

    // Everytime its selected set the reference to current
    useEffect(()=>{
        if(isSelected){
            trRef.current.nodes([shapeRef.current])
            trRef.current.getLayer().batchDraw()
        }
    })

    return ( 
        <React.Fragment>
            <Rect
                x= {shapeProperties.x}
                y= {shapeProperties.y}
                id= {shapeProperties.id}
                width={shapeProperties.width}
                height={shapeProperties.height}
                draggable={true}
                fill={shapeProperties.fill}
                onDragEnd={e=>{
                    onChange({
                        ...shapeProperties,
                        x: e.target.x(),
                        y: e.target.y()

                    })
                }}
            >
            </Rect>

            {isSelected && <Transformer
            ref={trRef}

            ></Transformer>}
        </React.Fragment>
        
     );
}
 
export default Square;
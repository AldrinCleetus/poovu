import React, { useEffect, useRef } from "react";
import {Rect, Transformer} from "react-konva"




const Square = ({shapeProperties,isSelected,onChange,onSelect}) => {


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
            <Rect
                x= {shapeProperties.x}
                y= {shapeProperties.y}
                ref={shapeRef}
                id= {shapeProperties.id}
                width={shapeProperties.width}
                height={shapeProperties.height}
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
                onTransformEnd={(e) => {
                    // transformer is changing scale of the node
                    // and NOT its width or height
                    // but in the store we have only width and height
                    // to match the data better we will reset scale on transform end
                    const node = shapeRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();
          
                    // we will reset it back
                    node.scaleX(1);
                    node.scaleY(1);
                    onChange({
                      ...shapeProperties,
                      x: node.x(),
                      y: node.y(),
                      // set minimal value
                      width: Math.max(5, node.width() * scaleX),
                      height: Math.max(node.height() * scaleY),
                    });
                  }}
            >
            </Rect>

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
 
export default Square;
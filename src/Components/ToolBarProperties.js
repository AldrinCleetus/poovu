import { useState } from "react";

const ToolBarProperties = ({setProperty}) => {
    

    const changeHeight= (val)=>{
        setProperty((prev)=>{
        return {
            ...prev,
            height:val.target.value
        }
       })

    }

    const changeWidth= (val)=>{
        setProperty((prev)=>{
         return {
             ...prev,
             width:val.target.value
         }
        })
 
     }

     const changeRadius= (val)=>{
        setProperty((prev)=>{
         return {
             ...prev,
             radius:val.target.value
         }
        })
 
     }


    
    return ( 
        <div>
            <p className="is-size-3">Height and Width</p>
            <input class="input is-medium my-2"  
            type="text" 
            placeholder="Height"
            onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault()}}}
            name="height" 
            onChange={changeHeight
            }></input>
            <input class="input is-medium my-2" type="text" placeholder="Width" 
            onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault()}}}
            name="width" onChange={changeWidth
            }></input>

            <p className="is-size-3">Radius</p>
            <input class="input is-medium my-2"  
            type="text" 
            placeholder="Radius"
            onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault()}}}
            name="radius" 
            onChange={changeRadius
            }></input>
            


        </div>
     );
}
 
export default ToolBarProperties;
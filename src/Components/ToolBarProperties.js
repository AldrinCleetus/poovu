import { useState } from "react";

const ToolBarProperties = ({setProperty,currentTool}) => {
    

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
            <input className="input is-rounded is-medium my-2"  
            type="text" 
            placeholder="Height"
            onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault()}}}
            name="height" 
            onChange={changeHeight
            }></input>
            <input className="input is-rounded is-medium my-2" type="text" placeholder="Width" 
            onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault()}}}
            name="width" onChange={changeWidth
            }></input>

            <p className="is-size-3">Radius</p>
            <input className="input is-rounded is-medium my-2"  
            type="text" 
            placeholder="Radius"
            onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault()}}}
            name="radius" 
            onChange={changeRadius
            }></input>

            <p className="is-size-3">Colors</p>
            <button className="button CButton pop p-6 mx-0 m-2 red"></button>
            <button className="button CButton pop p-6 mx-0 m-2 blue"></button>
            <button className="button CButton pop p-6 mx-0 m-2"></button>
            <button className="button CButton pop p-6 mx-0 m-2"></button>
            <button className="button CButton pop p-6 mx-0 m-2"></button>
            <button className="button CButton pop p-6 mx-0 m-2"></button>
            <button className="button CButton pop p-6 mx-0 m-2"></button>
            <button className="button CButton pop p-6 mx-0 m-2"></button>
            <button className="button CButton pop p-6 mx-0 m-2"></button>
            
            


        </div>
     );
}
 
export default ToolBarProperties;
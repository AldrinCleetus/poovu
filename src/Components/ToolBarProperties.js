import { useState } from "react";


const ToolBarProperties = ({setProperty,currentTool,setCurrentColor}) => {

    const exportImage = ()=>{
        console.log("ehllo")
    }
    
    // Refactor this code ....
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

     // Temporary Color selector
     const changeColor= (val)=>{
        
        switch(val.target.name) {
            case "red":
                setCurrentColor("#fa3636")
              break;
            case "blue":
                setCurrentColor('#2929ff')
              break;
            case "white":
                setCurrentColor('white')
              break;
            case "black":
                setCurrentColor('black')
              break;
            case "lightblue":
                setCurrentColor('#2f2fa8')
              break; 
            case "green":
                setCurrentColor('#49f995')
              break; 
            case "lightred":
                setCurrentColor('#ff6464')
              break; 
            case "lightblue":
                setCurrentColor('lightblue')
              break;             
            default:
              console.log("something aint right")
          } 
     }


     return ( 
        <div>
            <p className="is-size-3">Select Tool and Click on canvas to place</p>
            <p className="is-size-4">Height and Width</p>
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

            <p className="is-size-4">Radius</p>
            <input className="input is-rounded is-medium my-2"  
            type="text" 
            placeholder="Radius"
            onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault()}}}
            name="radius" 
            onChange={changeRadius
            }></input>

            <p className="is-size-4">Colors</p>
            <button onClick={changeColor} name={"red"} className="button CButton pop p-6 mx-0 m-2 red"></button>
            <button onClick={changeColor} name={"blue"} className="button CButton pop p-6 mx-0 m-2 blue"></button>
            <button onClick={changeColor} name={"white"} className="button CButton pop p-6 mx-0 m-2 white"></button>
            <button onClick={changeColor} name={"black"} className="button CButton pop p-6 mx-0 m-2 is-black"></button>
            <button onClick={changeColor} name={"lightblue"} className="button CButton pop p-6 mx-0 m-2 lightblue"></button>
            <button onClick={changeColor} name={"lightred"} className="button CButton pop p-6 mx-0 m-2 lightred"></button>
            <button onClick={changeColor} name={"green"} className="button CButton pop p-6 mx-0 m-2 green"></button>
            <button onClick={changeColor} name={"red"} className="button CButton pop p-6 mx-0 m-2"></button>
            <button onClick={changeColor} name={"red"} className="button CButton pop p-6 mx-0 m-2"></button>
            



            <p className="is-size-6">Edit size and properties here before placing</p>

            <button onClick={exportImage} className="button CButton pop p-5 mx-0 m-2 customRounded is-primary">Export as image</button>


        </div>
     );
}
 
export default ToolBarProperties;
import { useState } from "react";
import { Value } from "sass";

const ToolBarProperties = () => {
    
const [shapeProperties,setShapeProperties] = useState({
    height:"10",
    width:"10",
    radius:"10"
})


const changeValue = (val)=>{
    // switch(val.target.name){
    //     case "height": console.log("hehight cahnged")
    //     case "width": console.log("wjfjsfj sklf")
    // }
    console.log(val.target.name)
}

    
    return ( 
        <div>
            <p className="is-size-3">Position</p>
            <input class="input is-medium my-2" type="text" placeholder="Height" name="height" onChange={changeValue
            }></input>
            <input class="input is-medium my-2" type="text" placeholder="Width" name="width" onChange={changeValue
            }></input>


        </div>
     );
}
 
export default ToolBarProperties;
const ToolBar = ({setTool}) => {

    const selectingTool = (tool)=>{
        setTool(tool)
    }


    return ( 
        <div class="column is-2 has-text-right">
          <button className="button is-white customRounded CButton pop p-6 my-3 mx-6"  onClick={()=>{
            selectingTool("square")
          }}>
            <img src="images/square.png" alt="square" width={"50px"} className={"pr-2"}/>Square
          </button>
          <button className="button is-white customRounded CButton pop p-6 my-3 mx-6" onClick={()=>{
            selectingTool("circle")
          }}>
            <img src="images/circle.png" alt="circle" width={"50px"} className={"pr-4"}/> Circle
          </button>
          <button className="button is-white customRounded CButton pop p-6 my-3 mx-6" onClick={()=>{
            selectingTool("star")
          }}>
            <img src="images/star.png" alt="star" width={"50px"} className={"pr-2"}/>Star
          </button>
          <button className="button is-white customRounded CButton pop p-6 my-3 mx-6" onClick={()=>{
            selectingTool("line")
          }}>
            <img src="images/line.png" alt="line" width={"50px"} className={"pr-2"}/>Line
          </button>
          <button className="button is-white customRounded CButton pop p-6 my-3 mx-6" onClick={()=>{
            selectingTool("eraser")
          }}>
            <img src="images/eraser.png" alt="eraser" width={"50px"} className={"pr-2"}/>Eraser
          </button>
          <button className="button is-white customRounded CButton pop p-6 my-3 mx-6" onClick={()=>{
            selectingTool("clear")
          }}>
            <img src="images/clear.png" alt="eraser" width={"50px"} className={"pr-2"}/>Clear
          </button>
          </div>
     );
}
 
export default ToolBar;
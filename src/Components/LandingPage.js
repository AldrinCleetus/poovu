import { Routes,Route } from "react-router-dom";
import DesignTool from "./DesignTool";
import Home from "./Home";
import NavBar from "./NavBar";




const LandingPage = () => {
    return ( 
        <div>
            <section class="hero is-black  is-fullheight">
                <div className="hero-head">
                    <NavBar></NavBar>
                </div>
                
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/Create" element={<DesignTool></DesignTool>}></Route>
                </Routes>
            
            </section>




           
        </div>
     );
}
 
export default LandingPage;
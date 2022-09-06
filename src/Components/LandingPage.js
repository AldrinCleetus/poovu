import { Routes,Route } from "react-router-dom";
import DesignTool from "./DesignTool";
import Gallery from "./Gallery";
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
                    <Route path="/create" element={<DesignTool></DesignTool>}></Route>
                    <Route path="/gallery" element={<Gallery></Gallery>}></Route>
                </Routes>
            
            </section>




           
        </div>
     );
}
 
export default LandingPage;
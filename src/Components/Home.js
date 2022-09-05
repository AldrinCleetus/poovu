import PooklamCards from "./PooklamCards";
import { Link } from "react-router-dom";


const Home = () => {
    return ( 
        <div className="hero-body">
                   <div className="columns ">
                    <div className="column is-half">
                        <div className=" is-size-1-fullhd is-size-2-mobile has-text-primary  mb-5 ">
                        Generate Beautiful Pokkal Designs
                        </div>

                        <div className="is-size-3-fullhd is-size-5-mobile  mb-5">
                        Using our custom pokkalam design tool create beautiful designs easily 
                        </div>
                        <div className="column has-text-left mt-3 m-0 p-0  mb-5">
                        
                            <button className="button pop CButton is-primary customRounded px-6 mr-4 is-size-3"><Link to={"/"}>
                            Gallery</Link></button>
                            <button className="button pop CButton is-primary customRounded px-6 ml-4 is-size-3"><Link to={"/create"}>
                            Create</Link></button>
                        
                        </div>
                        <div className="column "></div>

                        <div className="columns">
                            <PooklamCards
                            name={"John Doe"}
                            date={"05/08/22"}
                            image={"images/test.png"}></PooklamCards>
                             
                             <PooklamCards
                            name={"Jane Doe"}
                            date={"04/08/22"}
                            image={"images/test2.png"}></PooklamCards>
                            
                        </div>
                        
                    </div>
                   
                    <div className="column landingImage is-half has-text-right  is-hidden-mobile ">
                        <img src="../images/illustration.png" alt="te" width={"650px"}/>
                        <div>
                            {/* <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.drivemag.net%2Fmedia%2Fdefault%2F0001%2F95%2Fseries-1-ford-mustang-rtr-1-2280-default-large.jpeg&f=1&nofb=1" alt=""
                            width={900} /> */}

                            
                        </div>
                    </div>
                    
                    
                   </div>

                   

                   
                   </div>
     );
}
 
export default Home;
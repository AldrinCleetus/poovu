import NavBar from "./NavBar";
import PooklamCards from "./PooklamCards";


const LandingPage = () => {
    return ( 
        <div>
            <section class="hero is-black  is-fullheight">
                <div className="hero-head">
                    <NavBar></NavBar>
                </div>

                <div className="hero-body">
                   <div className="columns ">
                    <div className="column is-half">
                        <div className=" is-size-1-fullhd is-size-2-mobile has-text-primary">
                        Generate Beautiful Pokkal Designs
                        </div>

                        <div className="is-size-3-fullhd is-size-5-mobile">
                        Using our custom pokkalam design tool create beautiful designs easily 
                        </div>
                        <div className="column has-text-left mt-3 m-0 p-0">
                        
                            <button className="button CButton is-primary customRounded px-6 mr-4 is-size-3">Gallery</button>
                            <button className="button CButton is-primary customRounded px-6 ml-4 is-size-3">Create</button>
                        
                        </div>
                        <div className="column"></div>

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
                   
                    <div className="column landingImage is-half has-text-right">
                        <img src="../images/illustration.png" alt="te"/>
                        <div>
                            {/* <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.drivemag.net%2Fmedia%2Fdefault%2F0001%2F95%2Fseries-1-ford-mustang-rtr-1-2280-default-large.jpeg&f=1&nofb=1" alt=""
                            width={900} /> */}

                            
                        </div>
                    </div>
                    
                    
                   </div>

                   

                   
                   </div>


                   

            </section>




           
        </div>
     );
}
 
export default LandingPage;
const NavBar = () => {
    return ( 
        <div className="">
<nav class="navbar is-black" role="navigation" aria-label="main navigation">
  
  
  <div class="navbar-brand ">
      <div className="navbar-item">
        <h3 className="is-size-2 ">PokkalDesigns</h3>
        {/* <img  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fplaceholder-logo-5.png&f=1&nofb=1" /> */}
      </div>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>



  <div class="navbar-menu is-active has-text-centered">
    <div class="navbar-end">
      <div className="navbar-item">
        <button className="button is-black is-rounded CButton">About</button>
      </div>

      <div className="navbar-item">
        <a href="#stats" className="button is-black is-rounded CButton">Gallery</a>
      </div>

      <div className="navbar-item">
        <button className="button CButton is-primary is-rounded">Create</button>
      </div>

      

      
     

      </div>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        
    </a>
    </div>

    
            </nav>
        </div>
     );
}
 
export default NavBar;
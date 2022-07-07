import { useState } from "react";
import { Navbar, Nav, InputGroup, FormControl, Image } from "react-bootstrap";
import brand from '../brand.png';
import user from '../user.png';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const NavBar =({setSearch, search}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const[searchString ,setSearchString]=useState('')
  const[ display,setDisplay]=useState(false)

 const searchHandler = (e) => {
    
      setSearch(e.currentTarget.value);
    
  };

const handleNavigation = (path) => {
  navigate(`/${path}`)
} 
 
    return (
                    <Navbar variant="dark" expand="lg" style={{ backgroundColor: "black", position:'sticky',top:'0',width:'100%',zIndex:'2' }}>
                        <Navbar.Brand href="/">
                        <Image src={brand} style={{ width: "100px" }} fluid /> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            
                            <div 
                            onClick={(e) => {handleNavigation("");setSearch("")}}
                            className={`nav-link font-weight-bold ${location.pathname ==="/"? "active":""}`} >
                            Home</div>
                            
                            <div 
                            onClick={(e) => {handleNavigation("TvShow")}}
                            className={`nav-link font-weight-bold ${location.pathname ==="/TvShow"? "active":""}`} >
                            TV Shows</div>
                            
                            <div 
                             onClick={(e) => {handleNavigation("movies")}}
                            className={`nav-link font-weight-bold ${location.pathname ==="/movies"? "active":""}`} > Movies </div>
                           
                            <div 
                            onClick={(e) => {handleNavigation("Recent")}}
                            className={`nav-link font-weight-bold ${location.pathname ==="/Recent"? "active":""}`} >Recently Added</div>
                           
                            <div 
                            onClick={(e) => {handleNavigation("MyList")}}
                             className={`nav-link font-weight-bold ${location.pathname ==="/MyList"? "active":""}`} >My List</div>
                            
                        </Nav>
                        <span className="d-flex align-items-center">
                            <FormControl
                                placeholder="Search and press enter"
                                aria-label="search"
                                aria-describedby="basic-addon1"
                                style={{display:display? "block":"none",borderRadius:"25px",height:"30px"}}
                                onKeyDown={searchHandler}
                                onChange={searchHandler}
                                value={search}
                            />
                            <div  onClick={()=>setDisplay(!display)}><i className="text-white bi bi-search mx-2"></i></div>
                            <div  className="text-white mx-2">KIDS</div>
                            <div ><i className=" text-white bi bi-bell-fill mx-2"></i> </div>
                            <div ><Image src={user} width="40px" /></div>
                        </span>
                        </Navbar.Collapse>
                    </Navbar>
    );
 
}

export default NavBar;


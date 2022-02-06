import { useState } from "react";
import { Navbar, Nav, InputGroup, FormControl, Image } from "react-bootstrap";
import brand from '../brand.png';
import user from '../user.png';
import { Link } from "react-router-dom";
const NavBar =({setSearch}) => {
  
const[searchString ,setSearchString]=useState('')
const[ display,setDisplay]=useState(false)

 const searchHandler = (e) => {
    if (e.keyCode === 13) {
      setSearch(searchString);
    } else {
      setSearchString(e.currentTarget.value);
    }
  };

 
    return (
                    <Navbar variant="dark" expand="lg" style={{ backgroundColor: "black", position:'sticky',top:'0',width:'100%',zIndex:'2' }}>
                        <Navbar.Brand href="/">
                        <Image src={brand} style={{ width: "100px" }} fluid /> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to='/'>
                            <div className="nav-link font-weight-bold" onClick={(e) => setSearch("")}>
                            Home</div>
                            </Link>

                            <Link to='/TvShow'>
                            <div className="nav-link font-weight-bold">
                            TV Shows</div>
                            </Link>
                            <Link to='/movies'>
                            <div className="nav-link font-weight-bold"> Movies </div>
                            </Link>
                            <Link to='/Recent'>
                            <div className="nav-link font-weight-bold">Recently Added</div>
                            </Link>
                            <Link to='/MyList'>
                            <div className="nav-link font-weight-bold">My List</div>
                            </Link>
                        </Nav>
                        <span className="d-flex align-items-center">
                            <FormControl
                                placeholder="Search and press enter"
                                aria-label="search"
                                aria-describedby="basic-addon1"
                                style={{display:display? "block":"none",borderRadius:"25px",height:"30px"}}
                                onKeyDown={searchHandler}
                                onChange={searchHandler}
                                value={searchString}
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


import NavBar from "./Navbar";
import MyFooter from "./MyFooter";


const MyLayout = ({setSearch, children})=>{

    return(
        <>
       <NavBar setSearch ={setSearch}/>
        {children}
       <MyFooter />
        </>
    )
}

export default MyLayout
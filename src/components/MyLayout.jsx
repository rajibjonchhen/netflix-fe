import NavBar from "./Navbar";
import MyFooter from "./MyFooter";


const MyLayout = ({setSearch, children})=>{

    return(
        <>
       <NavBar setSearch ={setSearch}/>
        <div style={{minHeight:'70vh'}}>
        {children}
        </div>
       <MyFooter />
        </>
    )
}

export default MyLayout
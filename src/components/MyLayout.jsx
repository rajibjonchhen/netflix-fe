import NavBar from "./Navbar";
import MyFooter from "./MyFooter";
import Section from "./Section";


const MyLayout = ({setSearch, children, searchQuery})=>{

    return(
        <>
       <NavBar setSearch ={setSearch}/>
        <div style={{minHeight:'70vh'}}>
        {searchQuery.length>2? <Section heading="Search Result" title={searchQuery}/>:children}
        </div>
       <MyFooter />
        </>
    )
}

export default MyLayout 
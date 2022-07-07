import NavBar from "./Navbar";
import MyFooter from "./MyFooter";
import Section from "./Section";


const MyLayout = ({setSearch, children, searchQuery})=>{

    return(
        <>
       <NavBar setSearch ={setSearch}/>
        <div style={{minHeight:'70vh'}}>
        {searchQuery.length<3? children: <Section heading="Search Result" title={searchQuery}/>}
        </div>
       <MyFooter />
        </>
    )
}

export default MyLayout 
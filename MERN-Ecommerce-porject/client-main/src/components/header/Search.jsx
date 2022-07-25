// inputBase is same as input  and type text
import { InputBase,Box,styled } from "@mui/material"
// serach icons
import SearchIcon from '@mui/icons-material/Search';
const SearchContainer=styled(Box)`
background:#fff;
width:38%;
border-radius:4px;
margin-left:10px;
display:flex;
`;
const InputSearchBase=styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`;
const SearchIconrapper=styled(Box)`
color:gray;
padding-top:5px;
display:flex;
`;


const Search = () => {
  return (

    <SearchContainer>
        <InputSearchBase placeholder="Search for Products , brands and more"/>
         <SearchIconrapper>
         
         <SearchIcon />
         </SearchIconrapper>
         {/* <input type="text" placeholder="Search for products , brands and More" style={{PaddingLeft:"0px",width:"98%", borderRadius:"4px",padding:"0px",margin:"0px"}}/> */}

    </SearchContainer>
  )
}

export default Search
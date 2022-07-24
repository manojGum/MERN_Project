import { AppBar,Toolbar,styled,Box } from "@mui/material";
import React from "react";


// components
import Search from "./Search";
import CustomButtons from "./CustomButtons";
// styled component used it is also mui component for appbar color or style process
// 



const StyledHeader = styled(AppBar)`
  background: #20b2aa;
  height:55px;

  :hover {
    background: #2e8b57;
  }
`;
const Component=styled(Box)`
margin-left:12%
`;
const CustomButtonwrapper=styled(Box)`
margin:0 5% 0 auto
`;

const Header=()=>{
  const logoURL = 'https://logos-download.com/wp-content/uploads/2019/07/Domain_.Wales_Logo-700x154.png'

  // const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

    return (
        <div>
            <StyledHeader>
                <Toolbar style={{minHeight:55}}>
                  <Component>
                      <img src={logoURL}  alt="Logo"  style={{width:75}}/>
                  </Component>
                  <Search />
                  <CustomButtonwrapper>
                    <CustomButtons />
                  </CustomButtonwrapper>
                </Toolbar>
             
            </StyledHeader>
        </div>
    )
}

export default Header
import React from "react"
// Typography is replacement of p tag
import { Box,Button, Typography,styled} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// chiled component handdle inside wrapper & > and tag or class name
const Wrapper=styled(Box)`
display:flex;
margin :0 3% 0 auto;

&>button, & > p, & > div{
margin-right:40px;
font-size:14px
align-item:center
}
`;
const LoginButton=styled(Button)`
color:#2874f0;
background:#ffffff;
padding:5px 30px;
border-radius:2px;
box-shadow:none;
font-wight:600;
height:32px


`;
const Cartwraper=styled(Box)`
display:flex;
margin-top:5px
`;
const CustomButtons=()=>{
    return(
        <Wrapper>
          <LoginButton variant="containt">Login</LoginButton>
          <Typography style={{marginTop:5, width:"135px"}}>Become a Seller</Typography>
          <Typography  style={{marginTop:5}}>More</Typography>
          <Cartwraper>
            <Typography>Cart</Typography>
            < ShoppingCartIcon />
          </Cartwraper>
        </Wrapper>
    )
}
export default CustomButtons
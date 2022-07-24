import React from 'react'
import "./Navbar.css"
import image from "./3b87a86d107d21733d3fc33443aa0e40.png"
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <header>
        <nav>
            <div>
                <div className='navlogo'>
                    <img src={image} alt=''/>
                    <div className="search_icon">
                    <SearchIcon  id="search"/>
                    </div>

                </div>
                <div className="nav_searchbaar">
                    <input type="text" name='' id=''/>
                </div>
            </div>
            <div className="right">

            </div>
        </nav>
    </header>
  )
}

export default Navbar
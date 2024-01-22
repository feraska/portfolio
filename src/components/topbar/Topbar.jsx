import React from 'react';
import "./topbar.scss";
import Person from '@mui/icons-material/Person';
import Mail from '@mui/icons-material/Mail';
const Topbar = ({ menuOpen, setMenuOpen }) => {
    return(
        <div className={"topbar " + (menuOpen && "active")}>

        <div className="wrapper">

        <div className="left">
        <a href="#intro" className="logo">
            genius.
          </a>

          <div className="itemContainer">
          <Person className="icon" />
            <span>0543201961</span>
            </div>
            <div className="itemContainer">
            <Mail className="icon" />
            <span>feras.94.kasabri@gmail.com</span>
          </div>    
        </div>

        <div className="right">
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>

        </div>

        </div>
         

        </div>
    )
}


export default Topbar;
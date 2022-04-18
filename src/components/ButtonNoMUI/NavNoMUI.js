import React from 'react';
import { Colors } from '../../theme/Colors/Colors';
import '../../theme/Typography/Typography.css';
import logo from '../../logo.svg';

const NavStyle = {
    backgroundColor:Colors.white,
    width: "100%",
    height: "150px",
}

const UpperNavStyle= {
    display:"flex", 
    height:"90px", 
}

const LowerNavStyle= {
    display:"flex",
    flexDirection: "row", 
    justifyContent: "center",
    listStyleType: "none",
}

const LinkStyle = {
    padding:"10px",
    color: "blue",
    cursor: "pointer",
}

const DropDownStyle = {
    display:"none" , 
    backgroundColor:"#ADD8E6",
    position:"fixed",
    zIndex:"100",
    width:"55px",
    top:"165px",
    lineHeight:"25px",
    padding:"15px",

}

function LMouseEnter(e){e.target.style.borderBottom = "5px solid blue";}
function LMouseLeave(e){e.target.style.borderBottom = "0px solid blue";}

function DDMouseEnter(e){
    e.target.style.borderBottom = "5px solid blue";
    document.getElementById("a").style.display = "block";
}
function DDMouseLeave(e){
    e.target.style.borderBottom = "0px solid blue";
    document.getElementById("a").style.display = "none";
    
}

function NavNoMUI() {
    return (

        <div style={NavStyle}>

            <div style={UpperNavStyle}>
                <img  alt="" src={logo} />
                <h2>Logo design system </h2>
            </div>
            
            <ul style={LowerNavStyle}>
                <li onMouseEnter={DDMouseEnter} onMouseLeave={DDMouseLeave} style={LinkStyle}>Who are we?
                <div id='a' style={DropDownStyle}> <a href="#!">Test 1A</a> <br/> <a href="#!">Link 1B</a><br/> <a href="#!">Link 1C</a> </div>
                </li>

                <li onMouseEnter={LMouseEnter} onMouseLeave={LMouseLeave} style={LinkStyle} > Link 2 </li>
                <li onMouseEnter={LMouseEnter} onMouseLeave={LMouseLeave} style={LinkStyle} > Link 3 </li>
            </ul>
        </div>

    );
}

export default NavNoMUI;
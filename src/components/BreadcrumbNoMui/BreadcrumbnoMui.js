import React from 'react'
import { Colors } from '../../theme/Colors/Colors';
import '../../theme/Typography/Typography.css';


const bcStyle={
    backgroundColor: Colors.primary,
    color: Colors.lightgrey,
    fontFamily: 'SerpentineSans',
}

const bcStyle1= {
    display:'flex',
    listStyleType:'none',
    margin:'0',
    padding:'20px',
    width:'100%',
}

const bcStyle2={
    paddingLeft:'10px',
    paddingRight:'10px',
}

const spacerStyle={
    margin:'0',
    fontSize: '28px',
}

const aStyle={
    fontSize: '28px',
    color: Colors.white,
}

export const spacer={
    default: ' / ',
    arrow: ' > ',
    interpoint: ' · ',
    succeedss : ' ≻ ',
}


const BCnoMui = () => {
  return (
    <nav className='breadcrumbs' style={bcStyle}>
        <ul style={bcStyle1}>
            <li style={bcStyle2}><a href="#" style={aStyle}>HOME</a></li>

            <p style={spacerStyle}>{spacer.default}</p>

            <li style={bcStyle2}><a href="#" style={aStyle}>LINK1</a></li>

            <p style={spacerStyle}>{spacer.default}</p>

            <li style={bcStyle2}><a href="#" style={aStyle}>LINK2</a></li>
        </ul>
    </nav>
  )
}

export default BCnoMui
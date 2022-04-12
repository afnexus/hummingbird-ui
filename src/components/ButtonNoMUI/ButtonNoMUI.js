import React from 'react';
import { Colors } from '../../theme/Colors/Colors';
import '../../theme/Typography/Typography.css';

const buttonStyle = {
    color: Colors.primary,
    backgroundColor: Colors.secondary,
    fontFamily: 'SerpentineSans'
};

function ButtonNoMUI(props) {
    return (
        <button style={ buttonStyle }>{props.text}</button>
    );
}

export default ButtonNoMUI;
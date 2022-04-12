import React from 'react';
import { Colors } from '../../theme/Colors/Colors'

const buttonStyle = {
    color: Colors.primary,
    backgroundColor: Colors.secondary,
};

function ButtonNoMUI(props) {
    return (
        <button style={ buttonStyle }>{props.text}</button>
    );
}

export default ButtonNoMUI;
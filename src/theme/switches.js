//refer to https://mui.com/material-ui/customization/theme-components/
//refer to https://mui.com/material-ui/react-switch/
import { neutrals } from "../style/Colors/Colors";
//import { primary } from "../style/Colors/Colors";

export const switches = {
    components: {
        MuiSwitch: {
            styleOverrides: {
                root: { 
                    '.Mui-disabled' : { color : neutrals[200]} ,
                },
            },

            variants: [
                {   
                    props: { variant: 'blue' }, 
                    style: { 
                        '.MuiSwitch-colorPrimary': {':hover': {backgroundColor: "rgba(44, 75, 156, 0.2);" }},
                        //'.MuiSwitch-colorPrimary': {':hover': {backgroundColor: primary[400], opacity:0.2 }}, //opacity doesnt work
                    },
                },
            ],
        },
    }
}
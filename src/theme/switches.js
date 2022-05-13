//refer to https://mui.com/material-ui/customization/theme-components/
//refer to https://mui.com/material-ui/react-switch/
import { neutrals, primary } from "../style/Colors/Colors";
import { alpha } from "@mui/material";

export const switches = {
    components: {
        MuiSwitch: {
            styleOverrides: {
                root: { 
                    '& .Mui-disabled' : { color : neutrals[200]} ,
                },
            },

            variants: [
                {   
                    props: { variant: 'blue' }, 
                    style: { 
                        //'.MuiSwitch-colorPrimary': {':hover': {backgroundColor: "rgba(44, 75, 156, 0.2);" }},
                        '.MuiSwitch-colorPrimary': {':hover': {backgroundColor: alpha(primary[400],0.2) }},
                    },
                },
            ],
        },
    }
}
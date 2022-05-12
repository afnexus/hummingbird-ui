//refer to https://mui.com/material-ui/customization/theme-components/

//refer to https://mui.com/material-ui/react-checkbox/

import { secondary } from "../style/Colors/Colors"


export const checkbox = {
    //Name of the component
    MuiCheckBox: {
        variants: [
            {
              props: { variant: 'twitter' },
              style: {
                "&:hover": {
                  backgroundColor: secondary[100],
                },
              },
            },
            {
              props: { variant: 'facebook' },
              style: {
                "&:hover": {
                  backgroundColor: secondary[400],
                },
              },
            },
          ],
        styleOverrides: {
        //name of the slot
        root: {
            
        },
        },
    },
}
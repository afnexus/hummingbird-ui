//refer to https://mui.com/material-ui/customization/theme-components/
//refer to https://mui.com/material-ui/react-switch/
import { secondary } from "../style/Colors/Colors"

export const icon = {
    components: {
        MuiIcon: {
            styleOverrides: {
                root: { 
                    backgroundColor: "red",
                    color: "red",

                    "&.Mui-focusVisible": {
                        backgroundColor: secondary[400],
                    },
                    ':hover' : {
                        backgroundColor : secondary[100],
                    }
                },

                // variants: [
                //     {   props: { state: 'focus' }, 
                //         style: { backgroundColor: secondary[400] }
                //     },
                //     {   props: { state: 'hover' },
                //         style: { backgroundColor : secondary[100] }
                //     }
                // ],
            },
        },
    }
}
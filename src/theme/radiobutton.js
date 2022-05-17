import { secondary } from "../style/Colors/Colors"


export const radiobutton = {
        MuiRadio : {
            styleOverrides : {
                root : {
                    "&.Mui-focusVisible": {
                        backgroundColor: secondary[400],
                    },
                    '&:hover' : {
                        backgroundColor : secondary[100],
                    },
                }
            },
            
            variants: [
                {
                  props: { state: 'Focus' },
                  style: {
                    ':hover' : {
                      backgroundColor: secondary[100],
                    },
                    backgroundColor : secondary[400],
                  },
                },
                {
                  props: { state: 'Hover' },
                  style: {
                    ':hover' : {
                      backgroundColor: secondary[400],
                    },
                    backgroundColor : secondary[100],
                  },
                },
              ],
        }
    }
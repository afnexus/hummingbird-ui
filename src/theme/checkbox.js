//refer to https://mui.com/material-ui/customization/theme-components/

//refer to https://mui.com/material-ui/react-checkbox/

import { secondary } from "../style/Colors/Colors"

//cannot change any color/background color even in root...
export const checkbox = {
  components: {
    MuiCheckbox : {
      styleOverrides : {
        root : {
          "&.Mui-focusVisible": {
            backgroundColor: secondary[400],
          },
          '&:hover' : {
            backgroundColor : secondary[100],
          }
        },
      },

      // variants: [
      //   {
      //     props: { variant: 'test' },
      //     style: {
      //       ':hover' : {
      //         backgroundColor: secondary[100],
      //       },
      //     },
      //   },
      //   {
      //     props: { variant: 'pest' },
      //     style: {
      //       ':hover' : {
      //         backgroundColor: secondary[400],
      //       },
      //     },
      //   },
      // ],

      
    },
  },
}
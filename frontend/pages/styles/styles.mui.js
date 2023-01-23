import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#a02f02',
  //   },
  // },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          marginBottom: 20,
        },
      },
    },
    // MuiCardHeader: {
    //   styleOverrides: {
    //     root: {
    //       paddingBlockEnd: 0,
    //     },
    //   },
    // },
    // MuiCardContent: {
    //   styleOverrides: {
    //     root: {
    //       paddingBlockStart: 0,
    //     },
    //   },
    // },
  },
});

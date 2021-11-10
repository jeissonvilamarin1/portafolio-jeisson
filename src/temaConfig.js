import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#35353d",
      main: "#0f0e17",
      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      light: '#ffba47',
      main: '#ff8906',
      dark: '#c55a00',
      contrastText: '#000',
  },
},
});

export default theme;
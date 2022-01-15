import { createTheme } from "@mui/material";
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});

export default theme;
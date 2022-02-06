import * as React from "react";
import { Box } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import AppBarComponent from "./components/AppBarComponent";
import MainComponent from "./components/MainComponent";

import "react-toastify/dist/ReactToastify.css";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const checkAuth = localStorage.getItem("isAuth");
  const [isAdmin, setIsAdmin] = React.useState(checkAuth || false);
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <AppBarComponent
        colorMode={colorMode}
        theme={theme}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />
      <MainComponent isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export const getDesginTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // Light mode palette
            primary: {
              main: "#1976d2",
            },
            background: {
              default: "#ffffff",
              paper: "#f5f5f5",
            },
            text: {
              primary: "#000000",
              secondary: "#666666",
            },
          }
        : {
            // Dark mode palette
            primary: {
              main: "#90caf9",
            },
            background: {
              default: "#121212",
              paper: "#1e1e1e",
            },
            text: {
              primary: "#ffffff",
              secondary: "#aaaaaa",
            },
          }),
    },
  });
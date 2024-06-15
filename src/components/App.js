import { ThemeProvider, createTheme } from "@mui/material";
import { AuthContextProvider } from "../common/AuthContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./login/Login";
import Signup from "./signup/Signup";
import Products from "./products/Products";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5"
    },
    secondary: {
      main: "#f44336"
    }
  }
})

function App() {

  return (
    <AuthContextProvider>
      <ThemeProvider theme={appTheme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route exact path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;

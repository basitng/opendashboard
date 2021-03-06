import React from "react";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { grey, indigo, purple } from "@material-ui/core/colors";
import OrderPage from "./pages/Order";
import SalesPage from "./pages/Sales";
import ProductPage from "./pages/Product";
import CategoryPage from "./pages/Category";
import ReviewsPage from "./pages/Reviews";
import AccountPage from "./pages/Account";
import NotificationPage from "./pages/Notification";
import createPalette from "@material-ui/core/styles/createPalette";
import SettingsPage from "./pages/Settings";

function App() {
  const theme = createTheme({
    typography: {
      allVariants: {
        color: grey[400],
      },
    },
    palette: {
      type: "dark",

      primary: {
        main: indigo[600],
        light: purple[600],
      },
      text: {
        secondary: grey[300],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/profile" element={<AccountPage />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

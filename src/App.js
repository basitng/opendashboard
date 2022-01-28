import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
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

function App() {
  const theme = createTheme({
    palette: createPalette({
      type: "dark",

      primary: {
        main: indigo[600],
        light: purple[600],
      },
      text: "#555",
    }),
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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

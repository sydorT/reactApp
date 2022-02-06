import { Route, Routes, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import EmailPage from "./pages/email/EmailPage";
import { ThemeProvider } from "@mui/material/styles";
import { Container, Stack } from "@mui/material";
import theme from "./theme";
import { HeaderProvider } from "./providers/HeaderProvider.js";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="false" disableGutters>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/email" element={<EmailPage />} />
            </Route>
          </Routes>
        </Container>
      </ThemeProvider>
    </div>
  );
}

function Layout() {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={{ minHeight: "100vh" }}
      >
        <div>
          <HeaderProvider>
            <Header />
          </HeaderProvider>
          <Outlet />
        </div>

        <Footer />
      </Stack>
    </>
  );
}

export default App;

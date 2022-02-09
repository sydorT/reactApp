import { Route, Routes, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import EmailConfirmationPage from "./pages/email/EmailConfirmationPage";
import ProfilePage from "./pages/profile/ProfilePage";
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
              <Route index element={<HomePage />} />
              <Route
                path="/email-confirmation"
                element={<EmailConfirmationPage />}
              />
              <Route path="/profile" element={<ProfilePage />} />
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

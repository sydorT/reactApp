import {Route, Routes, Outlet} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import theme from "./theme";

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="false" disableGutters>
          <Routes>
            <Route path='/' element={<Layout /> } >
              <Route path='/' element={<HomePage /> } />
              <Route path='/profile' element={<div>Profile page</div>}/>
            </Route>
          </Routes>
        </Container>
      </ThemeProvider>
    </div>
  );
}

function Layout() {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}

export default App;
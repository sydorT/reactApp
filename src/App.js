import {Route, Routes} from 'react-router-dom';
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
        <Container maxWidth="lg">
          <Header />
          <Routes>
            <Route path='/' exact element={<HomePage /> } />
            {/* <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} /> */}
          </Routes>
          <Footer />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
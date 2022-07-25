
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import {Box} from '@mui/material'

function App() {
  return (
    <div>
      <Header />
      <Box style={{marginTop:"56px"}}>
      <Home />
      </Box>
     
    </div>
  );
}

export default App;


import './App.css';
import {Route,Routes } from "react-router-dom"
import Navbar from "./Components/Mainpges/Navbar"
import Footer from "./Components/Mainpges/Footer"
import SingUp from './Components/SignUp-SingIn/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element= {<h1>Product Listing components</h1>} />
        <Route path='/add' element= {<h1> add Product components</h1>} />
        <Route path='/update' element= {<h1> update Product components</h1>} />
        <Route path='/logout' element= {<h1> logout Product components</h1>} />
        <Route path='/profile' element= {<h1> add probile components</h1>} />
        <Route path='/signup' element= {<SingUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
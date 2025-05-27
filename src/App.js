
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"


function App() {
  return (


    <>
    <BrowserRouter>
    <Navbar title="TextUtils"></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/About" element={<About></About>}></Route>
    </Routes>
    </BrowserRouter>
    </>
    

  );
}

export default App;

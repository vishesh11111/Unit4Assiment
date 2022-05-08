
import './App.css';
import {Route, Routes} from "react-router-dom"
import {Login} from "./components/Login";
import {SignUp} from "./components/SignUp";
import {Cart} from "./components/cart";
import {Home} from "./components/home";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/singUp' element={<SignUp/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        {/* <Route path='/' element={<Home/>}></Route> */}
      </Routes>
    
    </div>
  );
}

export default App;

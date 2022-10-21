import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Payment from './pages/payment';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/auth/login' element={<Login />}/>
        <Route exact path='/auth/register' element={<Register />}/>
        <Route exact path='/payment' element={<Payment />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

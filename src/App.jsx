import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "/pages/Home";
import CriarConta from "/pages/CriarConta";
import Login from "/pages/Login";
import Principal from "/pages/Principal";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
return (
  <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/CriarConta" element={<CriarConta/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Principal" element={<Principal/>}/>
        </Routes>      
      </BrowserRouter> 
    </div>
  )
}

export default App

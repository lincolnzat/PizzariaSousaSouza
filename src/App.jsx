import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "/pages/Home";
import CriarConta from "/pages/CriarConta";
import Login from "/pages/Login";
import Principal from "/pages/Principal";
import Usuario from "../pages/Usuario";
import Produtos from "../pages/Produtos";
import Perfil from "../pages/Perfil";
import Pedidos from "../pages/Pedidos";
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
        <Route path="/Usuario" element={<Usuario/>}/>
        <Route path="/Produtos" element={<Produtos/>}/>
        <Route path="/Perfil" element={<Perfil/>}/>
        <Route path="/Pedidos" element={<Pedidos/>}/>
        </Routes>      
      </BrowserRouter> 
    </div>
  )
}

export default App

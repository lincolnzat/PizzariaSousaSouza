import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import BarraNav from "../Componentes/BarraNav";
import CirculoFormulario from "../Componentes/CirculoFormulario";
import Formulario2 from "../Componentes/Formulario2";
import ImgForm2 from "../Componentes/ImgForm2";

function Login() {
  return (
    <div>
      <div>
       <BarraNav/>
      </div>
      <CirculoFormulario/>
      <div>
        <Formulario2/>
        <ImgForm2/>
        </div>
    </div>
  );
}

export default Login;

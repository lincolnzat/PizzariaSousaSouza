import BarraNav from "../Componentes/BarraNav";
import CirculoFormulario from "../Componentes/CirculoFormulario";
import Formulario2 from "../Componentes/Formulario2";
import ImgForm2 from "../Componentes/ImgForm2";
import Footer from "../Componentes/Footer";
import { Col } from "react-bootstrap";





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
    <Col className="desca2">
    <Footer/>
    </Col>
      </div>
  );
}

export default Login;

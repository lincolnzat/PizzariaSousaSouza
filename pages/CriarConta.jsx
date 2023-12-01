import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BarraNav from "../Componentes/BarraNav";
import CirculoForm from "../Componentes/CirculoFormulario";
import Formulario from "../Componentes/Formulario";
import ImgForm from "../Componentes/ImgForm";
import Footer from "../Componentes/Footer";
function CriarConta() {
  return (
    <div>
      <div>
        <BarraNav/>
        </div>
      <Container>
        <Row className="justify-content-md-center">
        <CirculoForm/>
        </Row>
      </Container>
      <div>
        <Container>
        <Formulario/>
        <ImgForm/>
        </Container>
      </div>
      <Col className="desca3">
      <Footer/>
      </Col>
    </div>
  );
}

export default CriarConta;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BarraNav from "../Componentes/BarraNav";
import CirculoForm from "../Componentes/CirculoFormulario";
import Formulario from "../Componentes/Formulario";
import ImgForm from "../Componentes/ImgForm";

function CriarConta() {
  return (
    <div>
      <div>
        <Container>
          <Col>
        <BarraNav/>
        </Col>
        </Container>
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
    </div>
  );
}

export default CriarConta;

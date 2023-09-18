import Menu from "./Menu";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BarraNav from "../Componentes/BarraNav";
import Retangulo from "../Componentes/Retangulo";
import CirculoPrincipal from "../Componentes/CirculoPrincipal";
import ImagemSimples from "../Componentes/ImagemSimples";
import InformacaoSimples from "../Componentes/InformacaoSimples";
import Pepperoninja from "../Componentes/Pepperoninja";

function Home() {
  return (
    <div>
      <div>
        <BarraNav/>
      </div>
      <Container>
        <Row className="justify-content-md-center">
          <CirculoPrincipal />
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Retangulo />
          </Col>
        </Row>
      </Container>
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="4">
              <ImagemSimples />{" "}
            </Col>
            <InformacaoSimples />
          </Row>
        </Container>
        <Container>
        <Col md="auto">
          <Row className="justify-content-md-center">
            <Pepperoninja />
              </Row>
            </Col>
        </Container>
      </div>
    </div>
  );
}

export default Home;

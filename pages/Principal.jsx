import NavbarInicial from "../Componentes/NavbarInicial";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CirculoPrincipal from "../Componentes/CirculoPrincipal";
import Pepperoninja from "../Componentes/Pepperoninja";
import CirculoFormulario from "../Componentes/CirculoFormulario";
import Pizzas from "/src/cardpizza";

function Principal() {
    return (
    <div>
    <NavbarInicial />
    {/* <Container>
        <Row>
        <Col >
            <CirculoFormulario />
        </Col>
        </Row>
    </Container> */}
    <Container>
        <Row>
        <Col className="mt-5">
           <Pepperoninja/> 
        </Col>
        </Row>
    </Container>
    <Container>
        <Row>
            <Col>
            <h4 className="mt-5">Dá uma olhada nessas ofertas!</h4>
            <Pizzas/>
            </Col>
        </Row>
    </Container>
    <Container>
        <Row>
            <Col>
            <h4 className="mt-5">As mais recomendadas!</h4>
            </Col>
        </Row>
    </Container>
    <Container>
        <Row>
            <Col>
            <h5 className="mt-2">Pizzas</h5>
            <Pizzas/>
            </Col>
        </Row>
    </Container>
    <Container>
        <Row>
            <Col>
            <h5 className="mt-2">Entradinhas</h5>
            <Pizzas/>
            </Col>
        </Row>
    </Container>
    <Container>
        <Row>
            <Col>
            <h5 className="mt-2">Sobremesas</h5>
            <Pizzas/>
            </Col>
        </Row>
    </Container>
    </div>
    
   
    );

}
export default Principal
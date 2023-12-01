import NavLogado from "../Componentes/NavLogado";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pepperoninja from "../Componentes/Pepperoninja";
import Pizzas from "/src/cardpizza";
import Circulo2 from "../Componentes/Circulo2";
import Ofertas from "../src/cardofertas";
import Entradinhas from "../src/cardentradas";
import Sobremesas from "../src/cardsobremesas";
import Footer from "../Componentes/Footer";



function Principal() {
    return (
    <div>
    <NavLogado />
     <Circulo2/>
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
            <Ofertas/>
            </Col>
        </Row>
    </Container>
    <Container>
        <Row>
            <Col>
            <div className="michelangelo"></div>
            <div className="raphael"></div>
            <div className="donatello"></div>
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
            <Entradinhas/>
            </Col>
        </Row>
    </Container>
    <Container>
        <Row>
            <Col>
            <h5 className="mt-2">Sobremesas</h5>
            <Sobremesas/>
            </Col>
        </Row>
    </Container>
    <Col className="desca" >
    <Footer/>
    </Col>
   </div>
   
    );
}
export default Principal
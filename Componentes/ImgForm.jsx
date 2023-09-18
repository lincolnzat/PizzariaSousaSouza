import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ImgForm() {
    return (
        <Container>
          <Row className="justify-content-md-start">
            <Col xs="auto" md="auto" >
              <div class="imgForm">
                <img
                  alt=""
                  src="/src/assets/img/Cadastro.png"
                  width="100%"
                  height="100%"
                  className="d-inline-block align-top " />{" "}
              </div>
            </Col>
          </Row>
        </Container>
        );
}
export default ImgForm



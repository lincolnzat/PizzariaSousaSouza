import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';



function Formulario() {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-end subir">
                    <Col xs lg="6">
                        <p class="formTitulo">Crie a sua conta!</p>
                        <Col xs lg="8">
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><p class="formSubtitulo">Nome</p></Form.Label>
                                    <Form.Control type="email" placeholder="Digite o seu nome" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><p class="formSubtitulo">E-mail</p></Form.Label>
                                    <Form.Control type="email" placeholder="Digite o seu e-mail" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><p class="formSubtitulo">Senha</p></Form.Label>
                                    <Form.Control type="email" placeholder="Digite a sua senha" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><p class="formSubtitulo">CEP</p></Form.Label>
                                    <Form.Control type="email" placeholder="Digite o seu CEP" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><p class="formSubtitulo">Cidade</p></Form.Label>
                                    <Form.Control type="email" placeholder="Cidade" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><p class="formSubtitulo">Endereço</p></Form.Label>
                                    <Form.Control type="email" placeholder="Endereço" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><p class="formSubtitulo">Estado</p></Form.Label>
                                    <Form.Control type="email" placeholder="Estado" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><p class="formSubtitulo">Endereço</p></Form.Label>
                                    <Form.Control type="email" placeholder="Bairro" />
                                </Form.Group>
                            </Form>
                            <Row xs lg="2" className="justify-content-md-center">
                                <Button variant="dark">Cadastrar</Button>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );


}

export default Formulario








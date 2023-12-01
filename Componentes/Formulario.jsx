import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react';


function Formulario() {
    const [cep, setCep] = useState([]);

    function checkCEP(meucep) {
        fetch(`https://viacep.com.br/ws/${meucep}/json/`)
        .then((response) => response.json())
        .then((json) => setCep(json))
    }

    const handleChange = (event) => {
        checkCEP(event.target.value);
      };
    
      return (
        <div>
            <Container>
                <Row className="justify-content-md-end subir">
                    <Col xs lg="6">
                        <p class="formTitulo">Crie a sua conta!</p>
                        <Col xs lg="8">
                            <Form action="http://localhost/Slim/api/clientes" method="POST">
                                <Form.Group className="mb-3">
                                    <Form.Label><p class="formSubtitulo">Nome</p></Form.Label>
                                    <Form.Control type="text"  name="nome" placeholder="Digite o seu nome" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label><p class="formSubtitulo">E-mail</p></Form.Label>
                                    <Form.Control type="text" name="email" placeholder="Digite o seu e-mail" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label><p class="formSubtitulo">Senha</p></Form.Label>
                                    <Form.Control type="password" name="senha" placeholder="Digite a sua senha" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label><p class="formSubtitulo">CEP</p></Form.Label>
                                    <Form.Control type="text" name="cep" value={cep.cep} onChange={handleChange} placeholder="Digite o seu CEP" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label><p class="formSubtitulo">Cidade</p></Form.Label>
                                    <Form.Control type="text" name="cidade" placeholder="Cidade" value={cep.localidade} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label><p class="formSubtitulo">Endereço</p></Form.Label>
                                    <Form.Control type="text" name="endereco" placeholder="Endereço" value={cep.logradouro} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label><p class="formSubtitulo">Estado</p></Form.Label>
                                    <Form.Control type="text" name="estado" placeholder="Estado"  value={cep.uf} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label><p class="formSubtitulo">Bairro</p></Form.Label>
                                    <Form.Control type="text" name="bairro" placeholder="Bairro" value={cep.bairro} />
                                </Form.Group>
                                <Row xs lg="2" className="justify-content-md-center">
                                <Button variant="dark" type="submit">Cadastrar</Button>
                            </Row>
                            </Form>
                           
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );


}

export default Formulario








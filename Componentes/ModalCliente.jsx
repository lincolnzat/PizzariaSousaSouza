import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ModalCliente() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [cep, setCep] = useState([]);

    function checkCEP(meucep) {
        fetch(`https://viacep.com.br/ws/${meucep}/json/`)
        .then((response) => response.json())
        .then((json) => setCep(json))
    }

    const handleChange = (event) => {
        checkCEP(event.target.value);
      };

    return(
        <>
        <Container>
          <Col>
            <Row className="justify-content-md-center">
        <Button variant="dark" onClick={handleShow}>
          Cadastrar cliente
        </Button>
          </Row>
        </Col>
        </Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastrar cliente</Modal.Title>
          </Modal.Header>
          <Form action="http://localhost/Slim/api/clientes2" method="POST">
        <Form.Label><p class="formSubtitulo2">Nome</p></Form.Label>
        <Form.Control type="text" name="nome" placeholder="Digite o seu nome" />
        <Form.Label><p class="formSubtitulo2">E-mail</p></Form.Label>
        <Form.Control type="text" name="email" placeholder="Digite o seu e-mail" />
        <Form.Label><p class="formSubtitulo2">Senha</p></Form.Label>
        <Form.Control type="password" name="senha" placeholder="Digite a sua senha" />
        <Form.Label><p class="formSubtitulo2">CEP</p></Form.Label>
        <Form.Control type="text" name="cep" value={cep.cep} onChange={handleChange} placeholder="Digite o seu CEP" />
        <Form.Label><p class="formSubtitulo2">Cidade</p></Form.Label>
        <Form.Control type="text" name="cidade" placeholder="Cidade" value={cep.localidade}/>
        <Form.Label><p class="formSubtitulo2">Endereço</p></Form.Label>
        <Form.Control type="text" name="endereco" placeholder="Endereço" value={cep.logradouro} />
        <Form.Label><p class="formSubtitulo2">Estado</p></Form.Label>
        <Form.Control type="text" name="estado" placeholder="Estado"  value={cep.uf}/>
        <Form.Label><p class="formSubtitulo2">Bairro</p></Form.Label>
        <Form.Control type="text" name="bairro" placeholder="Bairro" value={cep.bairro} />
         <Modal.Footer>
            <Button type="submit" variant="dark" >
              Cadastrar
            </Button>
            <Button variant="secondary" onClick={handleClose}> 
              Fechar
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
    
export default ModalCliente;
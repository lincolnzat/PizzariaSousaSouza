import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ModalProduto() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return(
        <>
        <Container>
          <Col>
            <Row className="justify-content-md-center">
        <Button variant="dark" onClick={handleShow}>
          Fazer pedido
        </Button>
          </Row>
        </Col>
        </Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Fazer pedido</Modal.Title>
          </Modal.Header>
         <Form action="http://localhost/Slim/api/cadastrarpedidos"  enctype="multipart/form-data" method="POST"> 
         <Form.Label><p class="formSubtitulo2">Nome do cliente:</p></Form.Label>
         <Form.Control type="text" name="nomecliente" placeholder="Nome do cliente" />
         <Form.Label><p class="formSubtitulo2">Telefone do cliente:</p></Form.Label>
         <Form.Control type="text" name="telefonecliente" placeholder="Telefone" />
         <Form.Label><p class="formSubtitulo2">Nome do pedido:</p></Form.Label>
         <Form.Control type="text" name="nomepedido" placeholder="Nome do pedido" />
         <Form.Label><p class="formSubtitulo2">Descrição:</p></Form.Label>
         <Form.Control type="text"  name="descricaopedido" placeholder="Descrição do pedido" />
         <Form.Label><p class="formSubtitulo2">Endereço:</p></Form.Label>
         <Form.Control type="text" name="enderecopedido" placeholder="Endereço" />
         <Form.Label><p class="formSubtitulo2">Preço total:</p></Form.Label>
         <Form.Control type="text" name="precopedido" placeholder="Preço" />
         <Form.Label><p class="formSubtitulo2">Data de entrega:</p></Form.Label>
         <Form.Control type="text" name="dataentrega" placeholder="Data" />
         
          <Modal.Footer>
            <Button type="submit" variant="dark">
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
    
export default ModalProduto;
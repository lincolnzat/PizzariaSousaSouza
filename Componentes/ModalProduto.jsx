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
          Cadastrar produto
        </Button>
          </Row>
        </Col>
        </Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastrar produto</Modal.Title>
          </Modal.Header>
         <Form action="http://localhost/Slim/api/cadastrarprodutos"  enctype="multipart/form-data" method="POST"> 
         <Form.Label><p class="formSubtitulo2">Nome:</p></Form.Label>
         <Form.Control type="text" name="nomeproduto" placeholder="Nome do produto" />
         <Form.Label><p class="formSubtitulo2">Descrição:</p></Form.Label>
         <Form.Control type="text"  name="descricaoproduto" placeholder="Descrição do produto" />
         <Form.Label><p class="formSubtitulo2">Preço:</p></Form.Label>
         <Form.Control type="text" name="precoproduto" placeholder="Preço do produto" />
         <Form.Label><p class="formSubtitulo2">Imagem:</p></Form.Label>
         <Form.Control type="file" name="imgproduto" placeholder="Imagem" />
         
          <Modal.Footer>
            <Button variant="dark" type="submit">
              Cadastrar
            </Button>
            <Button  variant="secondary"  onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
    
export default ModalProduto;
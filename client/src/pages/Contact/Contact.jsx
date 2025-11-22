import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import "../Contact/contact.css"
const Contact = () => {
  return (
   <>
   <section className='bg-dark pt-5'>
     <Container>
      <h1>🤝 Contacta conmigo :</h1>
      <Row className='mt-5 pb-5'>
        <Col>
        <div className='con border border-3 rounded p-5'>
          <h3>Enviáme un Mensaje Directo</h3>
          <label htmlFor="">Nombre Completo</label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="">Email</label>
          <br />
          <input type="email" />
          <br />
          <label htmlFor="">Mensaje</label>
          <br />
          <textarea name="" id=""></textarea>
          <br />
          <Button className='mt-5'>Enviar Mensaje</Button>
        </div>
        </Col>
        <Col>
      <div className='con border border-3 rounded p-5'>
        <h3>Información y Redes</h3>
        <p>Si prefieres un contacto mas directo tambien podeis hacerlo a traves de aqui:</p>
        <h4>Email</h4>
        <p>albertopedro85@hotmail.com</p>
        <h4>Linkedin</h4>
        <p>albertopedro85@hotmail.com</p>
        </div>
        </Col>
      </Row>
     </Container>
   </section>
   
   
   </>
  )
}
export default Contact;

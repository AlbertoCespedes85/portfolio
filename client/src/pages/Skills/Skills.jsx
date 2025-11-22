import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { apts } from '../../data/cardsProjects';
import { CardApts } from '../../components/CardProjects/CardProjects';
const Reservation = () => {
  return (
   <>
   <section>
     <Container>
      <h1 className='m-4'>Mis Skills</h1>
      <Row>
        {apts.map(apt => (
          <Col key={apt.id}>
          <CardApts apt = {apt}/>
          </Col>
        ))}
      </Row>

     </Container>
   </section>
   </>
  )
}
export default Reservation;

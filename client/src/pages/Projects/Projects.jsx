import React from 'react'
import { projects } from '../../data/cardsProjects';
import { Col, Container, Row } from 'react-bootstrap';
import {CardProjects } from '../../components/CardProjects/CardProjects';

const Projects = () => {
  return (
    <>
     <section className='bg-dark'>
     <Container>
      <h1 className='pt-4 pb-4'>Mis Proyectos</h1>
      <Row>
        {projects.map(project => (
          <Col className='m-4' key={project.id}>
          <CardProjects project = {project}/>
          </Col>
        ))}
      </Row>

     </Container>
   </section>
    </>
  )
}
export default Projects;

import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className="bg-dark">
        <Container>
          <h2 className="pt-5">
            🚀 De la Fábrica al Código: Un Nuevo Comienzo
          </h2>
          <p >
            "Hola, mi nombre es Alberto Céspedes Sáiz. Después de 20 años de
            experiencia en el sector de las comunicaciones, tomé una decisión
            que transformó mi carrera: dedicarme a mi verdadera pasión.
            Impulsado por mi fascinación de toda la vida por el hardware, el
            software y la programación, decidí sumergirme de lleno en el
            desarrollo web. Realicé un bootcamp intensivo con la escuela
            SocraTech, donde reforcé mi entusiasmo por el aprendizaje y tuve la
            suerte de rodearme de grandes compañeros y profesores que compartían
            mi visión. Para mí, empezar este camino era una oportunidad de
            crecimiento que no podía dejar pasar."
          </p>
          <h3>🎯 Mi Enfoque como Desarrollador Full-Stack</h3>
          <p >
            Mi principal fortaleza reside en la resolución de problemas. Soy una
            persona tenaz: cuando me propongo una meta, trabajo sin descanso
            hasta encontrar la solución más eficiente y robusta. Esta
            mentalidad, combinada con mi experiencia en un entorno de alta
            responsabilidad durante dos décadas, me hace un profesional
            comprometido y fiable. Actualmente, estoy en una fase de formación
            continua, consolidando mis habilidades técnicas.
          </p>
          <p className="fw-bold text-decoration-underline"> Mi Stack de desarollo se centra en :</p>
          <ul >
            <li>Frontend: React , HTML , CSS</li>
            <li>Backend: Node.js</li>
            <li>Base de Datos:MySQL</li>
            <li>Herramientas:Git, GitHub</li>
          </ul>
          <h3>💪 Más Allá del Código (Cultura y Personalidad)</h3>
          <p >
            Creo firmemente en el poder del buen ambiente de trabajo y siempre
            busco fomentar el buen rollo en el equipo. Me considero una persona
            con inquietudes y pasiones fuera de lo laboral, que me ayudan a
            mantener la mente activa y equilibrada: Intereses: Soy un entusiasta
            de los videojuegos y me gusta desconectar practicando pádel.
            Valores: Mi principal motor es mi familia, lo que me aporta
            estabilidad y un sentido claro de mis prioridades.
          </p>
          <h3>Listos para Colaborar</h3>
          <p >
            Si buscas a un desarrollador con una sólida base técnica, una
            mentalidad de crecimiento constante y una profunda dedicación a la
            solución de problemas, y que además contribuye a una cultura
            positiva, me encantaría conversar.
          </p>
          <div className="pb-5">
            <Button onClick={()=>navigate("/projects")} className="me-5">Proyectos</Button>
            <Button onClick={()=>navigate("/contact")}>Contacta</Button>
          </div>
        </Container>
      </section>
    </>
  );
};
export default About;

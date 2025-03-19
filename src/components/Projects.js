import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/ITAU.jpg";
import projImg5 from "../assets/img/dashboard.png";
import projImg6 from "../assets/img/estrutura-de-dados.png";
import projImg7 from "../assets/img/financas.png";
import projImg8 from "../assets/img/login.png";
import projImg9 from "../assets/img/remedio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Desáfio do Itaú",
      description: "Desenvolvimento",
      imgUrl: projImg4,
    },
    {
      title: "Dashboard",
      description: "Design e desenvolvimento",
      imgUrl: projImg5,
    },
    {
      title: "Projeto de Estrutura de Dados",
      description: "Design e desenvolvimento",
      imgUrl: projImg6,
    },
    {
      title: "Sistema de finanças",
      description: "Design e desenvolvimento",
      imgUrl: projImg7,
    },
    {
      title: "Sistema de login",
      description: "Desenvolvimento",
      imgUrl: projImg8,
    },
    {
      title: "Sistema de gerenciamento de rémedios",
      description: "Desenvolvimentoo",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Aqui estão alguns dos projetos que desenvolvi, unindo tecnologia e boas práticas para criar soluções eficientes. Cada projeto reflete minha experiência com Java, JavaScript, arquitetura de software, APIs, banco de dados e desenvolvimento full-stack. Sempre busco escrever um código limpo, escalável e bem estruturado.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Em breve</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Em breve</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

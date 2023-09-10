import { Container, Row, Col, Tab  } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/p1.png";
import projImg2 from "../../assets/p2.png";
import projImg3 from "../../assets/p3.png";
import projImg4 from "../../assets/p4.png";
import './project.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-commerce Web App",
      description: "Full Stack App made using ReactJS, Firebase",
      imgUrl: projImg1,
      githubUrl:"https://ecommerce-web-ivory.vercel.app/shop"
    },
    {
      title: "Patient-Clinic Management",
      description: "Clinic Management System made using HTML ,CSS , Js , MySQL",
      imgUrl: projImg2,
      githubUrl:"https://patient-management-cli.vercel.app/"
    },
    {
      title: "QR Attendance System",
      description: "Attendance system for clubs and organizations made using NextJS",
      imgUrl: projImg4,
      githubUrl:"https://qr-attendance-based-system-emmanuelallanmj.vercel.app/"
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I'm excited to share with you a collection of web projects I've been working on. These projects showcase my passion for web development and design. Each one represents a unique blend of creativity and functionality.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                    
            
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
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}
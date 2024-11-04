import Contact from './Contact';
import Footer from './Footer';
import projects from '../../src/data/projectsData.jsx';
import { HashLink as Link } from 'react-router-hash-link';

const Portfolio = () => {
  return (
      <>
        <section className="content-section bg-light section-margin" id="portfolio">
          <div className="container px-4 px-lg-5">
            <div className="content-section-heading text-center">
              <h3 className="text-secondary mb-3">Proyectos en React, JavaScript, TypeScript, HTML y CSS</h3>
              <h2 className="mb-3">Portfolio: Esther R. Herrero 🍀</h2>
              <p className="mb-5">Página en construcción. <br/> Iré subiendo pequeños proyectos poco a poco y luego los iré mejorando 💪🏼.</p>
            </div>
            <div className="row gx-4 gx-lg-5">
              {projects.map((project, index) => (
                  <div className="col-lg-6 col-md-6 container-card" key={index}>
                      <h5 className="card-title">{project.title}</h5>
                      <Link to={project.link} className="card h-100 position-relative overflow-hidden">
                          <div
                              className="card-img"
                              style={{
                                  backgroundImage: `url(${project.imgSrc})`,
                                  height: '15rem',
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: 'white',
                                  textAlign: 'center',
                                  backgroundBlendMode: 'overlay',
                                  // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              }}
                          >
                              <div className="text-white">
                                  {/*<h5 className="card-title">{project.title}</h5>*/}
                                  <p className="card-text" dangerouslySetInnerHTML={{__html: project.description}}></p>
                              </div>
                          </div>
                      </Link>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
        <Footer />
      </>
  );
};

export default Portfolio;
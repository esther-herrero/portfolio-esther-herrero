import Contact from './Contact'; // Asegúrate de que la ruta sea correcta
import Footer from './Footer'; // Asegúrate de que la ruta sea correcta

import img1 from '../../public/img/portfolio-1.jpg';
import img2 from '../../public/img/portfolio-2.jpg';
import img3 from '../../public/img/portfolio-3.jpg';
import img4 from '../../public/img/portfolio-4.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: "GifApp Buscador",
      description: "Busca y visualiza GIFs utilizando la API de Giphy.",
      imgSrc: img1,
      link: "/portfolio-esther-herrero/gifapp",
    },
    {
      title: "Ice Cream",
      description: "A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!",
      imgSrc: img2,
      link: "/icecream",
    },
    {
      title: "Strawberries",
      description: "Strawberries are such a tasty snack, especially with a little sugar on top!",
      imgSrc: img3,
      link: "/strawberries",
    },
    {
      title: "Workspace",
      description: "A yellow workspace with some scissors, pencils, and other objects.",
      imgSrc: img4,
      link: "/workspace",
    },
  ];

  return (
      <>
        <section className="content-section bg-light" id="portfolio">
          <div className="container px-4 px-lg-5">
            <div className="content-section-heading text-center">
              <h3 className="text-secondary mb-0">Projects React</h3>
              <h2 className="mb-5">Portfolio</h2>
            </div>
            <div className="row gx-4 gx-lg-5">
              {projects.map((project, index) => (
                  <div className="col-lg-6 col-md-6 mb-4" key={index}>
                    <div className="card h-100 position-relative overflow-hidden">
                      <a href={project.link} rel="noopener noreferrer">
                        <div
                            className="card-img"
                            style={{
                              backgroundImage: `url(${project.imgSrc})`,
                              height: '200px',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              textAlign: 'center',
                              backgroundBlendMode: 'overlay',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Filtro oscuro para que el texto sea legible
                            }}
                        >
                          <div className="text-white">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                          </div>
                        </div>
                      </a>
                    </div>
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

import '../css/style.css';

import img4 from '../../public/img/img_14.jpg';

const Contact = () => {
    return (
        <section className="page-section clearfix" id="contact">
            <div className="container">
                <div className="intro">
                    <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src={img4} alt=""/>
                    <div className="intro-text left-0 text-center bg-faded p-5 rounded contacto_padding">
                        <h2 className="section-heading mb-4">
                            <span className="section-heading-lower">Contacto</span>
                        </h2>
                        <div className="col-md-12">
                            <div className="info">
                                <div>
                                    <a href="https://es.linkedin.com/in/esther-herrero-desarrollo-dise%C3%B1o" className="linkedin">
                                        <i className="icofont-envelope"></i>
                                    </a>
                                    <a href="mailto:herrero.develop@gmail.com">
                                        <p>herrero.develop@gmail.com</p>
                                    </a>
                                </div>
                                <div>
                                    <i className="icofont-google-map"></i>
                                    <p>Madrid, Spain</p>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/esther-herrero-desarrollo-dise%C3%B1o-front-react-javascript/" className="linkedin">
                                        <i className="icofont-linkedin"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/esther-herrero-desarrollo-dise%C3%B1o-front-react-javascript/" target="_blank" rel="noopener noreferrer">
                                        <p>Linkedin</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Contact;
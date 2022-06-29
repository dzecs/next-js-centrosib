import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          ODONTOLOGICA <samp className="home__title-color">SIB</samp>
        </h1>
        <a href="#contact" className="button">
          Contact
        </a>
      </div>
      <div className="home__social">
        <a href="#" className="home__social-icon">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="#" className="home__social-icon">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="#" className="home__social-icon"></a>
      </div>
      <div className="home__img"></div>
  </section>
    
 
  );
};

export default Home;

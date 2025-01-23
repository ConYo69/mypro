import '../assets/styles/hero.css'
import portfolioImage from '../assets/images/hero-img.jpg';


const Hero = () => {
    return (
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Welcome, I'm William.</h1>
            <p className="hero-subtitle">
            I am a professional web developer specializing in creating responsive and user-friendly websites.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="hero-btn primary-btn">
                My Projects
              </a>
              <a href="#contact" className="hero-btn secondary-btn">
                About me
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={portfolioImage} alt="Portfolio Showcase" />
          </div>
        </section>
      );
    };
  
  export default Hero;
import '../assets/styles/hero.css'
import portfolioImage from '../assets/images/hero-img.jpg';


const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <img className="hero-img" src={portfolioImage} alt="Portfolio Showcase" />
        <h1>Hi, I'm William</h1>
        <p>
          a Web Developer 
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            My Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
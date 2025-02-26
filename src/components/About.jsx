import '../assets/styles/about.css'
import profileImage from '../assets/images/about-img.jpg';
import Navbar from "./Navbar"

const About = () => {
  return (
    <section className="about-container">
        <Navbar/>
      <div className="about-inner">
        <div className="about-image">
          <img className="about-img" src={profileImage} alt="About Me" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
          I’m a 22-year-old web developer from the Philippines who loves turning ideas into code. Whether it’s crafting sleek designs or solving tricky bugs, I’m all about creating fun, functional, and visually cool stuff.

When I’m not coding, I’m exploring tech trends, gaming, or dreaming up my next project. I’m always ready to build something awesome. Let’s create something awesome together because coding is always better when it’s fun!
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default About;
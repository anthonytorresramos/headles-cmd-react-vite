import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsam
            minima facilis. Fuga soluta corporis eveniet nisi consequuntur. In
            maiores delectus quae ipsam fuga, alias sit cum repudiandae esse
            natus id, et modi qui facere, voluptatum repellendus mollitia nam?
            Ex impedit fuga laboriosam veniam quia a sunt odit et quasi!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;

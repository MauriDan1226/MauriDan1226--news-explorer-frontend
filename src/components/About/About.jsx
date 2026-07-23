import './About.css';

// Sección de presentación sobre el autor del proyecto.
function About() {
  return (
    <section className="about" aria-label="Sobre el autor">
      <div className="about__container container">
        {/* Placeholder del avatar. Sustituir por una imagen real:
            <img className="about__avatar" src={avatar} alt="Foto del autor" /> */}
        <div className="about__avatar about__avatar_placeholder" aria-hidden="true" />

        <div className="about__text">
          <h2 className="about__title">Acerca del autor</h2>
          <p className="about__paragraph">
            Este bloque describe al autor del proyecto. Aquí debe indicar tu nombre,
            a qué te dedicas y qué tecnologías de desarrollo conoces. También puedes
            hablar de tu experiencia con TripleTen, de lo que aprendiste allí y cómo
            puedes ayudar a los clientes potenciales.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

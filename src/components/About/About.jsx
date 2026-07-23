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
          <h2 className="about__title">Sobre el autor</h2>
          <p className="about__paragraph">
            Este proyecto fue desarrollado por Mauricio como parte del programa de
            desarrollo web de TripleTen. Aquí puedes contar tu trayectoria, tus
            intereses y qué tecnologías dominas.
          </p>
          <p className="about__paragraph">
            News Explorer combina un frontend en React con una API de noticias para
            buscar artículos y guardarlos en una cuenta personal. Reemplaza este
            texto con tu propia biografía.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

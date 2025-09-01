import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5, // Exibe 5 itens em telas grandes
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2, // Exibe 2 itens em telas grandes
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1, // Exibe 1 item em tablets
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Exibe 1 item em dispositivos móveis
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Sou desenvolvedor full-stack, apaixonado por Java e JavaScript, atuando tanto no back-end quanto no front-end para criar aplicações completas, funcionais e bem estruturadas. Busco sempre escrever um código limpo e de fácil manutenção, aplicando boas práticas como Design Patterns e Clean Code para garantir eficiência, qualidade e escalabilidade.
Atualmente, atuo também como Team Leader, liderando e orientando um time de desenvolvimento. Minha responsabilidade vai além da programação: aplico metodologias ágeis, incentivo boas práticas e apoio o crescimento técnico e profissional dos membros da equipe.
Além do desenvolvimento tradicional, tenho experiência com plataformas low-code e no-code (como Bubble e n8n), o que me permite acelerar entregas, integrar sistemas e automatizar processos de forma ágil e eficiente.
Minha missão é conectar tecnologia e usabilidade, transformando ideias em soluções digitais modernas, intuitivas e que realmente geram valor para o usuário.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Desenvolvimento web</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Integração de API</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Desenvolvimento front-end</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

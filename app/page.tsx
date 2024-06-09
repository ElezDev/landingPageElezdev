import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
const Home = () => {
  return (
    <section className="h-full  ">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24
        "
        >
          {/* {text} */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hola Soy <br /> <span className="text-accent">Edwin Ledezma</span>
            </h1>
            <p className="max-w-[50] mb-9 text-white/80">
              Especializado en tecnologías como Flutter, Kotlin, Laravel,
              Angular y React. 💡 Mi trayectoria en el desarrollo ha
              perfeccionado mis habilidades y versatilidad en la creación de
              soluciones innovadoras. Desde aplicaciones móviles usando Flutter
              y Kotlin hasta aplicaciones web con Angular y React, prospero en
              proyectos desafiantes. 🌐 La colaboración y la comunicación
              efectiva son clave en mi trabajo. No solo se trata de resolver
              problemas; priorizo la eficiencia y los resultados en todo lo que
              hago. 🏆 He contribuido al éxito de proyectos significativos,
              aprendiendo de cada experiencia. Estoy emocionado por el futuro y
              ansioso por seguir creciendo en el dinámico mundo de la
              tecnología. ¡Conectémonos y exploremos cómo puedo contribuir a tu
              próximo gran proyecto! 🔗✨
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                size="lg"
                variant="outline"
                className="uppercase flex items-center gap-2"
              >
                <span>Dowloand CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* {foto} */}

          <div className="order-1 xl:order-none bm-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;

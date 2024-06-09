"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Desarrollo Web",
    description:
      "Creamos sitios web modernos y responsivos que se adaptan a cualquier dispositivo. Desde landing pages hasta aplicaciones web complejas, garantizamos una excelente experiencia de usuario.",
    href: "https://tuweb.com/desarrollo-web",
  },
  {
    num: "02",
    title: "Desarrollo Móvil",
    description:
      "Desarrollamos aplicaciones móviles nativas e híbridas para Android e iOS, asegurando un rendimiento óptimo y una interfaz intuitiva.",
    href: "https://tuweb.com/desarrollo-movil",
  },
  {
    num: "03",
    title: "Gestión de Bases de Datos",
    description:
      "Ofrecemos servicios de diseño, implementación y gestión de bases de datos eficientes y seguras, optimizadas para soportar aplicaciones de alto rendimiento.",
    href: "https://tuweb.com/gestion-bases-de-datos",
  },
  {
    num: "04",
    title: "Landing Pages",
    description:
      "Diseñamos y desarrollamos landing pages atractivas y funcionales que convierten visitantes en clientes, con un enfoque en el diseño visual y la optimización para SEO.",
    href: "https://tuweb.com/landing-pages",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                className="flex-1 flex flex-col justify-center gap-6 group"
                key={index}
              >
                {/* {top} */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full 
                     bg-white group-hover:bg-accent flex
                     transition-all duration-500
                     justify-center items-center
                     hover:-rotate-45
                     "
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* {title} */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent
                transition-all duration-500
                ">{service.title}</h2>
                {/* {description} */}
                <p className="text-white/60">{service.description}</p>
                {/* {border} */}
                <div className="border-b border-white/20 w-full" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

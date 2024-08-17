"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNode,
  FaLaravel,
  FaAngular,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFlutter } from "react-icons/si";

const about = {
  title: "About Me",
  description:"Soy un desarrollador de software con experiencia en PHP, Laravel, Angular, React y Flutter. Apasionado por crear soluciones eficientes y escalables, disfruto trabajar en proyectos que desafían mis habilidades técnicas y me permiten aprender constantemente. Con una sólida formación en Desarrollo de Software por el SENA, estoy comprometido con la excelencia y el crecimiento continuo",
  info: [
    {
      fieldName: "Phone",
      fieldDesciption: " (+57) 312 618 5281",
    },
    {
      fieldName: "Experience",
      fieldDesciption: " 2 Years",
    },
    {
      fieldName: "Nationality",
      fieldDesciption: " Colombiana",
    },
    {
      fieldName: "Email",
      fieldDesciption: " elezdev2023@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldDesciption: " Avaliable",
    },
  ],
};
const experience = {
  iconn: "",
  title: "My experience",
  descrition:
    "Tengo dos años de experiencia en desarrollo de software, especializado en PHP y Laravel para el backend, y Angular, React y Flutter para el desarrollo frontend y móvil. He trabajado con bases de datos SQL, implementando soluciones eficientes y escalables en proyectos diversos.",
  item: [
    {
      position: "FullStack Developer",
      company: "Virtualt Technology",
      duration: "Feb 2022 - Present",
      description:
        "Tengo dos años de experiencia en desarrollo de software, especializado en PHP y Laravel para el backend, y Angular, React y Flutter para el desarrollo frontend y móvil. He trabajado con bases de datos SQL, implementando soluciones eficientes y escalables en proyectos diversos.",
    },
  ],
};
const education = {
  title: "Education",
  descrition:
    "Estudié Desarrollo de Software en el SENA, Colombia, donde adquirí una sólida base técnica en programación, diseño de sistemas y desarrollo de aplicaciones, tanto en entornos frontend como backend.",
  item: [
    {
      degree: "Analisis y desarrolo de sistemas de infomación",
      institution: "SENA",
      duration: "2021 - 2023",
    },
    {
      degree: "Tecnico en sistemas",
      institution: "SENA",
      duration: "2019",
    },
  ],
};

const skills = {
  title: "Skills",
  descrition:
    "Tengo dos años de experiencia en desarrollo de software, especializado en PHP y Laravel para el backend, y Angular, React y Flutter para el frontend y desarrollo móvil. He trabajado con bases de datos SQL, diseñando e implementando soluciones eficientes y escalables. Mis habilidades incluyen desarrollo full stack, integración de APIs, optimización de rendimiento y trabajo en equipo en entornos ágiles",
  iconn: "",
  skillList: [
    {
      name: "Flutter",
      icon: <SiFlutter />,
    },

    {
      name: "Laravel",
      icon: <FaLaravel />,
    },
    {
      name: "Angular",
      icon: <FaAngular />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "Node.js",
      icon: <FaNode />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Tailwind.css",
      icon: <SiTailwindcss />,
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 10,
        transition: {
          delay: 0.4,
          duration: 0.6,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="Experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList
            className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
         gap-6
         "
          >
            <TabsTrigger value="Experience">Experience</TabsTrigger>
            <TabsTrigger value="Education"> Education</TabsTrigger>

            <TabsTrigger value="Skills">Skills</TabsTrigger>
            <TabsTrigger value="About">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="Experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.descrition}
                </p>
                <ScrollArea className="h-[400px]:">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="texr-xl  max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="Education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.descrition}
                </p>
                <ScrollArea className="h-[400px]:">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="texr-xl  max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="Skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div>
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.descrition}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className=" w-full h-[150px] bg-[#232329] 
                              rounded-xl flex justify-center items-center group"
                            >
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="About"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] max-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldDesciption}</span>


                    </li>;
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

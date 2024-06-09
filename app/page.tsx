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
              Hello I'm <br />{" "}
              <span className="text-accent">Edwin Ledezma</span>
            </h1>
            <p className="max-w-[50] mb-9 text-white/80">
              Specializing in technologies such as Flutter, Kotlin, Laravel,
              Angular, and React. 💡 My journey in development has honed my
              skills and versatility in crafting innovative solutions. From
              mobile apps using Flutter and Kotlin to web applications with
              Angular and React, I thrive on challenging projects. 🌐
              Collaboration and effective communication are key in my work. I'm
              not just about solving problems; I prioritize efficiency and
              results in everything I do. 🏆 I've contributed to the success of
              significant projects, learning from each experience. I'm excited
              for the future and eager to keep growing in the dynamic world of
              technology. Let's connect and explore how I can contribute to your
              next big project! 🔗✨
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
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;

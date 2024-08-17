"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";

const info = [
  {
    label: "Phone",
    icon: <FaPhone />,
    deescription: " (+) 312 618 5281 ",
  },
  {
    label: "Email",
    icon: <FaEnvelope />,
    deescription: " elezdev2023@gmail.com",
  },
  {
    label: "Address",
    icon: <FaMapMarker />,
    deescription: "Popayán Cauca Co.",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.6, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div  className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Lets work together</h3>
              <p className="text-white/60">Completa el formulario si requieres uno de mis servicios...</p>
              {/* inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="Firstname"
                  className="w-full"
                />
                 <Input
                  type="Lastname"
                  placeholder="Lastname"
                  className="w-full"
                />
                 <Input
                  type="email"
                  placeholder="Email"
                  className="w-full"
                />
                 <Input
                  type="phone"
                  placeholder="Phone number"
                  className="w-full"
                />
              </div>
              {/* select */}

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent >
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Developmnet</SelectItem>
                    <SelectItem value="cst">Mobile Development</SelectItem>
                    <SelectItem value="mst">Otro</SelectItem>

                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" placeholder="type your message here."></Textarea>
                {/* button */}

                <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>   
              </form>  
              

                  
          </div>
            {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-white/60">{item.label}</p>
                      <h3 className="text-xl">{item.deescription}</h3>
                    </div>
                    
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    url: "https://github.com/elezDev",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/edwin-ledezma/",
  },
  {
    icon: <FaYoutube />,
    url: "",
  },
  {
    icon: <FaWhatsapp />,
    url: "",
  },
];

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.url} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;

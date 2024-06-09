import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub/>,
    url: "https://github.com/elezDev",
  },
  {
    icon: <FaLinkedinIn/>,
    url: "https://www.linkedin.com/in/edwin-ledezma/",
  },
  {
    icon: <FaYoutube/>,
    url: "https://www.youtube.com/channel/UCY-333333333",
  },
  {
    icon: <FaWhatsapp/>,
    url: "https://api.whatsapp.com/send?phone=51999999999",
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return <div className={containerStyles}>
   {socials.map((item, index)=>{
    return (
      <Link key={index} href={item.url}  className={iconStyles}>
        {item.icon}
      </Link>
    );
   })}
  </div>;
};

export default Socials;

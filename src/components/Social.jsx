import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/apurbo501893",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/apurbo501893/",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/channel/UCJQ8XQ8Y1Yq8V9n2J0JXZDw",
  },
  {
    icon: <FaTwitter />,
    path: "https://twitter.com/apurbo501893",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

import { useEffect, useState } from "react";
import { socialMedia } from "../constants";

const SocialConnect = () => {
  const [socialState, setSocialState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 180) {
      setSocialState(true);
    } else {
      setSocialState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <div
      className={`${socialState
          ? "right-0 transition-all duration-1000"
          : "right-[-5rem] transition-all duration-1000"
        } fixed top-96 z-40`}
    >
      <div className="flex flex-col gap-3 md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <div
            key={social.id}
            onClick={() => window.open(social.link)}
            className={`flex items-center justify-start cursor-pointer h-10 w-10 bg-teal-400 rounded-l-full`}
          >
            <img
              src={social.icon}
              alt={social.id}
              className={`object-contain text-black ml-3`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialConnect;

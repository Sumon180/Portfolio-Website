import styles from "../style";
import robot from "../assets/robot.png";
import { useEffect, useState } from "react";
import TextType from "../layout/TextType";

const Hero = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(
    "Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees."
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index]);

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[22px] text-[32px] text-white ss:leading-[80px] leading-[75px]">
            Hello! i'm <br />{" "}
            <span className="text-gradient ss:text-[72px] text-[52px]">
              Full-Stack Developer
            </span>
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[58px] text-[52px] text-white ss:leading-[80px] leading-[75px] w-full">
          {" "}
          <TextType />
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{text}</p>

        <div className="flex items-center gap-10 mt-5">
          <button type="button" className={`button-emrald ${styles}`}>
            Hire Me
          </button>
          <button type="button" className={`button-light ${styles}`}>
            Download CV
          </button>
        </div>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient top-0 pink__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <button type="button" className={`button-emrald ${styles}`}>
          Hire Me
        </button>
      </div>
    </section>
  );
};

export default Hero;

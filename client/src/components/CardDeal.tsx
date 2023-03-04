import card from "../assets/card.png";
import styles, { layout } from "../style";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CardDeal = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className={layout.section}>
      <div data-aos="zoom-in-up" className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div data-aos="zoom-in-up" className={layout.sectionImg}>
        <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;

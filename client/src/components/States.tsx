import { states } from "../constants";
import styles from "../style";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const States = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section
        className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
      >
        {states.map((state) => (
          <div
            data-aos="zoom-in-up"
            key={state.id}
            className={`flex-1 flex justify-start items-center flex-row m-3`}
          >
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
              {state.value}
            </h4>
            <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
              {state.title}
            </p>
          </div>
        ))}
      </section>
      ;
    </>
  );
};
export default States;

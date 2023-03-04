import { clients } from "../constants";
import styles from "../style";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Clients = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div
        data-aos="zoom-in-up"
        className={`${styles.flexCenter} flex-wrap w-full`}
      >
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <img
              src={client.logo}
              alt="client_logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;

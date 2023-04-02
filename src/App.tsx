import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  States,
  Testimonials,
} from "./components";
import Message from "./layout/Message";
import SocialConnect from "./layout/SocialConnect";
import ContactForm from "./layout/ContactForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MailSend from "./layout/MailSend";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="bg-black w-full overflow-hidden">
      <div className={``}>
        <div className={``}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <States />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <MailSend />
          {/* <ContactForm /> */}
          <Footer />
        </div>
      </div>
      <Message />
      <SocialConnect />
    </div>
  );
};
export default App;

import { motion } from "framer-motion";
import about from "../assets/About me.jpg";
import Title from "../Component/Title";
import { Link } from "react-router-dom";

const About_me = () => {
  const welcomeTitle = {
    hidden: {
      x: "200%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="container">
      <Title title="About me" />
      <div className="d-flex justify-content-center align-items-center flex-column flex-lg-row text-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
        >
          {/* <img
            src={about}
            className="img order-1 order-lg-0 rounded about-img"
            alt="about me"
          /> */}
        </motion.div>
        <div className=" ps-lg-5 pb-3 pt-3 ">
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className="text-start"
          >
            My name is <span className="about-name fw-bold">Noman Ahmad</span>,
            and I am a dedicated front-end web developer from Pakistan. I have a
            passion for learning and creating new applications with fast,
            secure, and clean code. I obtained certificates of completion and
            proficiency from{" "}
            <span className="about-cert fw-bold">
              ( Udemy, Hacker Rank, W3 Schools
            ).
            </span>
            <br /> I specialize in programming and maintaining responsive
            websites that provide seamless user experiences.I take pride in
            crafting dynamic and engaging interfaces by writing optimized and
            clean code. I stay up-to-date with the latest development tools and
            techniques to ensure that I deliver cutting-edge web applications.
          </motion.p>
          <div className="d-flex flex-column flex-md-row gap-3">
            {[
              {
                text: "Download CV",
                link: "https://drive.google.com/file/d/1T2WiPZpWZX2XdkaHZ8tuoZRZFB39ueeN/view?usp=drive_link",
              },
              {
                text: "Get in touch",
                link: "/contact",
              },
              {
                text: "Show Skills",
                link: "/skills",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="me-4"
                variants={welcomeTitle}
                initial={"hidden"}
                animate={"visible"}
                transition={{ delay: 0.05 + index * 0.05 }}
                exit={{ opacity: 0, y: "200%" }}
              >
                <Link to={item.link}>
                  <button type="button" className="btn">
                    {item.text}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_me;

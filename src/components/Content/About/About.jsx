import MainLayout from "@components/Layout/Layout";
import MySkills from "./Skills/Skills";
import ScrollToTop from "../../../ScrollToTop";
import { Information } from "./constants";
import styles from "./styles.module.scss";
import MyExperience from "./Experience/Experience";
import MyHeader from "@components/Header/Header";
import MyFooter from "@components/Footer/Footer";

export default function About() {
  const { containerAbout, headingAbout, containerAboutMe, skills } = styles;

  return (
    <>
      <ScrollToTop />
      <MyHeader />
      <MainLayout>
        <div className={containerAbout}>
          <div className={headingAbout}>
            <p>Do what you like, like what you do</p>
          </div>
          <div>
            {" "}
            {Information.map((info, index) => (
              <div key={index}>
                <div className={containerAboutMe}>
                  <div>
                    <hr />
                    <h1>About Me</h1>
                    <img src={info.Avatar} alt="" />
                  </div>
                  <div>
                    <p>
                      <span>    </span>I graduated from {info.Education} with a major in{" "}
                      {info.Major}. {info.Description}
                    </p>
                  </div>
                </div>
                <hr />
                <h2>Experience:</h2>
                <MyExperience />
              </div>
            ))}
          </div>
          <div className={skills}>
            <hr />
            <h2>My Skills</h2>
            <MySkills />
          </div>
        </div>
      </MainLayout> 
    <MyFooter />  
    </>
  );
}

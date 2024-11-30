import AboutMe from "./About/AboutMe";
import Introduction from "./Introduction/Introduction";
import ProjectPreview from "./Projects/ProjectPreview";
import styles from "./styles.module.scss";
import { ProjectPreviewDetails } from "./Projects/constants";
import FormContact from "./Contact/Form/FormContact";
import ScrollToTop from "../../ScrollToTop";
import ChevronDown from "@icon/chevrondownIcon.svg";
import HandPointRight from "@icon/handpointright.svg";
import { Link } from "react-router-dom";
import MyHeader from "@components/Header/Header";
import MyFooter from "@components/Footer/Footer";
import useHandleScroll from "@hooks/useHandleScroll";
import { useEffect, useState } from "react";
import classNames from "classnames";

function MyContent() {
  const {
    containerContent,
    projectsPreview,
    zigzag__list,
    zigzag__items,
    moreProject,
    moreBtn,
    visibleMore,
    visibleElement,
    aboutMe,
    containerFormContact,
    contentContact,
  } = styles;

  const { scrollPosition } = useHandleScroll();
  const [ readmore, setReadmore ] = useState(false);
  const [ element, setElement ] = useState(false);
  const [ form, setForm ] = useState(false) 

  useEffect(() => {
    setElement(scrollPosition> 2850);
    setReadmore(scrollPosition > 2850);
    setForm(scrollPosition > 5000);
    console.log(scrollPosition)
  }, [scrollPosition]);

  return (
    <>
      <ScrollToTop />
      <MyHeader />
      <Introduction />
      <div className={containerContent}>
        <div className={projectsPreview}>
          <h1>My Projects</h1>
          <ul className={zigzag__list}>
            {" "}
            {ProjectPreviewDetails.map((element, index) => (
              <li key={index} className={zigzag__items}>
                <ProjectPreview
                  url={element.ImageProject}
                  name={element.Name}
                  href={element.Href}
                  index={index + 1}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={classNames(moreProject, {
              [visibleMore]: readmore,
            })}>
          <Link
            to={"/projects"}
            className={classNames(moreBtn,{
              [visibleElement]: element
              })}
          >
            <p>More project</p>
            <img src={ChevronDown} alt="" />
          </Link>
        </div>
        <div className={aboutMe}>
          <AboutMe />
        </div>
        <div className={containerFormContact}>
          <div className={contentContact}>
            <p>
              Have a question or want to work together? <br></br>Shoot me a
              message via the contact form
              <img src={HandPointRight} alt="" />
            </p>
          </div>
          <FormContact />
        </div>
      </div>
      <MyFooter />
    </>
  );
}

export default MyContent;


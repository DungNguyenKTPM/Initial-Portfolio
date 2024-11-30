import MainLayout from "@components/Layout/Layout";
import ScrollToTop from "../../../ScrollToTop";
import ProjectPreview from "./ProjectPreview";
import styles from "./styles.module.scss";
import { ProjectPreviewDetails } from "./constants";
import MyHeader from "@components/Header/Header";
import MyFooter from "@components/Footer/Footer";

export default function Projects() {
  const {
    containerProjects,
    headingProjects,
    containerContent__Projects,
    zigzag__list,
    zigzag__items,
  } = styles;
  const ShowProjects = () => {
    return (
      <>
        <ScrollToTop />
        <MyHeader />
        <MainLayout>
          <div className={containerProjects}>
            <p className={headingProjects}>Recent Projects</p>
            <div className={containerContent__Projects}>
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
          </div>
        </MainLayout>
        <MyFooter />
      </>
    );
  };

  return ShowProjects();
}

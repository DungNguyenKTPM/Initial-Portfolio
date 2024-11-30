import MyHeader from "@components/Header/Header";
import { ProjectsDetails } from "../constants";
import styles from "../styles.module.scss";
import MyFooter from "@components/Footer/Footer";
import ScrollToTop from "../../../../ScrollToTop";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Project3() {
  const {
    containerProject,
    headingProject,
    title,
    context,
    overview,
    descriptionProject,
    middleHr,
    goal,
    containerFeature,
    DescriptionFeature,
    imgCarosel,
  } = styles;

  return (
    <>
      <ScrollToTop />
      <MyHeader />
      {ProjectsDetails.map((element, index) => (
        <div key={index}>
          {element.Project3.map((element, index) => (
            <div className={containerProject} key={index}>
              <div className={headingProject}>
                <div className={title}>
                  <h2 className={context}>
                    Project: <br />
                    <span>{element.Name}</span>
                  </h2>
                  {element.Overview.map((element, index) => (
                    <ul className={overview} key={index}>
                      <li>
                        Role: <span>{element.Role}</span>
                      </li>
                      <li>
                        Type: <span>{element.Type}</span>
                      </li>
                      <li>
                        Language: <span>{element.Language}</span>
                      </li>
                      <li>
                        Technology: <span>{element.Technology}</span>
                      </li>
                    </ul>
                  ))}
                </div>
                <img src={element.ImageProject} alt="" />
              </div>
              <div className={descriptionProject}>
                {" "}
                {element.Description.map((element, index) => (
                  <div key={index}>
                    <div className={middleHr}>
                      <h2>Goal</h2>
                    </div>
                    <p className={goal}>{element.Goal}</p>
                    <div className={middleHr}>
                      <h2>Feature</h2>
                    </div>
                    <div>
                      {" "}
                      {element.Feature.map((feature, index) => (
                        <div className={containerFeature} key={index}>
                          <div className={DescriptionFeature}>
                            <h4>{feature.NameFeature}</h4>
                            <p>{feature.DescriptionFeature}</p>
                          </div>
                          <div className={imgCarosel}>
                            <Carousel autoPlay>
                              {feature.ImageFeature.map((img, index) => (
                                <div key={index}>
                                  <img src={img.Src} alt={img.Alt} />
                                </div>
                              ))}
                            </Carousel>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
      <MyFooter />
    </>
  );
}

export default Project3;

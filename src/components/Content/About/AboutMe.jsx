import { Information } from "./constants";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

function AboutMe() {
  const { containerAboutMe, readmore, readmoreBtn } = styles;

  return (
    <>
      <div>
        {" "}
        {Information.map((info, index) => (
          <div key={index} className={containerAboutMe}>
            <div>
              <hr />
              <h1>About Me</h1>
              <img src={info.Avatar} alt="" />
            </div>
            <div>
              <p className={readmore}>
                <span>    </span>I graduated from {info.Education} with a major in {info.Major}.{" "}
                {info.Description}
              </p>
              <Link className={readmoreBtn} to="/about">
                {" "}
                ...Read more{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutMe;

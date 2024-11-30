import { Experience } from "../constants";
import styles from "../styles.module.scss";

function MyExperience() {
  const { containerExperience, experienceCard } = styles;

  return (
    <>
      <div className={containerExperience}>
        {Experience.map((exp, index) => (
          <div className={experienceCard} key={index}>
            <h3>{exp.Title}</h3>
            <h3>{exp.Time}</h3>
            <hr />
            <p>{exp.Description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyExperience;

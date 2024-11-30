import { Skills } from "../constants";
import styles from "../styles.module.scss";

export default function MySkills() {
  const { containerSkills, be, fe, others } = styles;

  const showMySkills = () => {
    return (
      <>
        {Skills.map((element, index) => (
          <div className={containerSkills} key={index}>
            <div className={be}>
              <h3>Back-end:</h3>
              {element.Backend.map((element, index) => (
                <div key={index}>
                  <div>
                    <h4>Programming Languege</h4>
                    <ul>
                      {element.ProgrammingLanguege.map((lang, index) => (
                        <li key={index}>{lang}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Frameworks</h4>
                    <ul>
                      {element.Frameworks.map((framework, index) => (
                        <li key={index}>{framework}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Database Management Systems</h4>
                    <ul>
                      {element.DatabaseManagementSystems.map((db, index) => (
                        <li key={index}>{db}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className={fe}>
              <h3>Front-end</h3>
              {element.Frontend.map((element, index) => (
                <div key={index}>
                  <div>
                    <h4>Programming Languege</h4>
                    <ul>
                      {element.ProgrammingLanguege.map((lang, index) => (
                        <li key={index}>{lang}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Frameworks</h4>
                    <ul>
                      {element.Frameworks.map((framework, index) => (
                        <li key={index}>{framework}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className={others}>
              <h3>Other</h3>
              <div>
                <div>
                  {element.A.map((element, index) => (
                    <div key={index}>
                      <div>
                        <h4>Technology</h4>
                        <ul>
                          {" "}
                          {element.Techonology.map((tech, index) => (
                            <li key={index}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>English</h4>
                        <ul>
                          {element.English.map((element, index) => (
                            <li key={index}>{element}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>Soft Skills</h4>
                        <ul>
                          {element.SoftSkills.map((element, index) => (
                            <li key={index}>{element}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return showMySkills();
}

import Avatar from "@images/avatar/Avatar.png";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Button from "@components/Button/Button";

function Introduction() {
  const {
    containerIntro,
    avatarSetting,
    introSetting,
    nameSetting,
    professionSetting,
  } = styles;

  const Introduction = [
    {
      FullName: "Nguyen Huynh Huy Dung",
      Profession: "Software Developer",
    },
  ];

  return (
    <>
      <div className={containerIntro}>
        <img className={avatarSetting} src={Avatar} alt="" />
        <div className={introSetting}>
          {" "}
          {Introduction.map((element, index) => (
            <div key={index}>
              <p>
                Hi, my name is <br />
                <span className={nameSetting}>{element.FullName}</span>
                <br />
                I&apos;m a{" "}
                <span className={professionSetting}>{element.Profession}</span>
              </p>
            </div>
          ))}
          <Link to="/about">
            <Button content={"About Me"} href={"/about"} isPrimary />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Introduction;

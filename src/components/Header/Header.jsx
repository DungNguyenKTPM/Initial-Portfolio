import styles from "./styles.module.scss";
import { dataMenu } from "./constants";
import Logo from "@images/logo/Logo.png";
import { Link } from "react-router-dom";
import useHandleScroll from "@hooks/useHandleScroll";
import { useEffect, useState } from "react";
import classNames from "classnames";

const {
  containerHeader,
  absoluteHeader,
  fixedHeader,
  containerMenu,
  logoSetting,
  menu,
} = styles;

function MyHeader() {
  const { scrollPosition } = useHandleScroll();
  const [fixedPosition, setFixedPosition] = useState(false);

  useEffect(() => {
    setFixedPosition(scrollPosition > 80);
  }, [scrollPosition]);
  

  return (
    <>
      <div
        className={classNames(containerHeader, absoluteHeader, {
          [fixedHeader]: fixedPosition,
        })}
      >
        <Link to={"/"}>
          <img src={Logo} className={logoSetting} />
        </Link>
        <div className={containerMenu}>
          {dataMenu.map((item, index) => (
            <ul key={index}>
              <li className={menu}>
                <Link to={item.href}>{item.content}</Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyHeader;

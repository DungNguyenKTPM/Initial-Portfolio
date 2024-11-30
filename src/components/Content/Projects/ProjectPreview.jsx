import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Button from "@components/Button/Button";

function ProjectPreview({ url, name, href, index }) {
  const { containerProjectPreview, brightness, aboutProject, number, tittle} =
    styles;


  return (
    <div
      className={containerProjectPreview}
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className={brightness}>
        <div className={aboutProject}>
          <div className={number}>{"0" + index}</div>
          <div className={tittle}>
            <h3>{name}</h3>
            <Link to={href}>
              <Button content="View project" isSecondary />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectPreview.prototype = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default ProjectPreview;

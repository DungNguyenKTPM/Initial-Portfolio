import PropTypes from "prop-types";
import styles from "./styles.module.scss";

function MainLayout({ children }) {
  const { containerLayout } = styles;

  return (
    <main>
      <div className={containerLayout}>{children}</div>
    </main>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;

import Loading from "@images/Loading.gif";
import styles from "./styles.module.scss";

const LoadingBar = () => {

    const {containerLoading} = styles;

  return (
    <div className={containerLoading}>
      <img src={Loading} alt="" />
    </div>
  );
};

export default LoadingBar;

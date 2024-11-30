import styles from "./styles.module.scss";
import ScrollToTop from "../../../ScrollToTop";
import MainLayout from "@components/Layout/Layout";
import FormContact from "./Form/FormContact";
import { SocialNetworkCommunication } from "./constants";
import HandPointRight from "@icon/handpointright.svg";
import fbIcon from "@icon/fbIcon.svg";
import githubIcon from "@icon/githubIcon.svg";
import gmailIcon from "@icon/gmailIcon.svg";
import linkeinIcon from "@icon/linkeinIcon.svg";
import xIcon from "@icon/xIcon.svg";
import phoneIcon from "@icon/phoneIcon.svg";
import { Link } from "react-router-dom";
import MyHeader from "@components/Header/Header";
import MyFooter from "@components/Footer/Footer";

function Contact() {
  const { containerContact, textContact, handRight, handBottom, point } =
    styles;

  const handleRenderIcon = (type) => {
    switch (type) {
      case "fb":
        return fbIcon;
      case "git":
        return githubIcon;
      case "gmail":
        return gmailIcon;
      case "linkein":
        return linkeinIcon;
      case "x":
        return xIcon;
      case "phone":
        return phoneIcon;
    }
  };

  return (
    <>
      <ScrollToTop />
      <MyHeader />
      <MainLayout>
        <div className={containerContact}>
          <div className={textContact}>
            <h1>Contact</h1>
            <p>
              If you want to discuss something with me or just want to say
              “Hi!”. Shoot me a message via the contact form
              <img className={handRight} src={HandPointRight} alt="" /> <br />
              In case you need to discuss in more detail, you can contact us via
              some of the contact methods below
              <img className={handBottom} src={HandPointRight} alt="" />
            </p>
            <ul>
              {SocialNetworkCommunication.map((detail, index) => (
                <li key={index}>
                  <Link to={detail.href}>
                    <p className={point}>
                      <img
                        src={handleRenderIcon(detail.src)}
                        style={{
                          background: detail.color,
                        }}
                      />
                      {detail.display}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <p>Thanks for watching, see ya!</p>
          </div>
          <FormContact />
        </div>
      </MainLayout>
      <MyFooter />
    </>
  );
}

export default Contact;

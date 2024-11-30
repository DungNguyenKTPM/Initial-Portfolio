import styles from "./styles.module.scss";
import fbIcon from "@icon/fbIcon.svg";
import githubIcon from "@icon/githubIcon.svg";
import gmailIcon from "@icon/gmailIcon.svg";
import linkeinIcon from "@icon/linkeinIcon.svg";
import xIcon from "@icon/xIcon.svg";
import { LinkContactDetails } from "./constants";

function MyFooter() {
  const { containerFooter, footerContent, linkContact } = styles;

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
    }
  };

  return (
    <>
      <div className={containerFooter}>
        <div className={footerContent}>
          <p>© 2024 Made with Reactjs by Nguyen Huynh Huy Dung</p>
        </div>
        <div className={linkContact}>
          {LinkContactDetails.map((detail, index) => (
            <div
              key={index}
              style={{
                background: detail.color,
              }}
            >
              <img src={handleRenderIcon(detail.src)} href={detail.href} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyFooter;

import classNames from "classnames";
import styles from "./styles.module.scss"

function Button({content, isPrimary=true, isSecondary=false, isTertiary=false, ...props}) {
    const {btn, primaryBtn, secondaryBtn, tertiaryBtn} = styles;
    return (
        <>
            <button 
            className={classNames(btn, {
                [primaryBtn]: isPrimary,
                [secondaryBtn]: isSecondary,
                [tertiaryBtn]: isTertiary,
            })}
                {...props}
            >
                {content}
            </button>
        </>
    );
}

export default Button;
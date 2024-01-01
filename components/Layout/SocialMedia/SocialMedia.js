import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { SiMessenger } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";

// IoLogoWhatsapp SiMessenger
import styles from "styles/Share.module.css";
const SocialMedia = () => {
  const handleClink = () => {
    window.location.href = "tel:00201550841119"
  }
  const handleClink_messenger = () => {
    window.location.href = "https://www.messenger.com/t/deltawyNet/"
  }
  const handleClink_whatsapp = () => {
    window.location.href = "https://wa.me/+201067439828"
  }
  return (
    <div className={styles.SocialIcons}>
      <ul>
        <li>
          <div onClick={handleClink}>
          <BsTelephoneFill />
          </div>
                    
          {/* <a
            aria-label="our phone number"
            href={`tel:00201550841119`}
            target="_blank"
            rel="noopener noreferrer"
          >

            <BsTelephoneFill />
          </a> */}
        </li>
        <li>
          <span>
          <div onClick={handleClink_messenger}>
          <SiMessenger />
          </div>
            {/* <a
              aria-label="our messanger chat"
              href={`https://www.messenger.com/t/deltawyNet/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiMessenger />
            </a> */}
          </span>
        </li>
        <li>
          <span>
          <div onClick={handleClink_whatsapp}>
          <IoLogoWhatsapp />
          </div>
            {/* <a
              aria-label="our whatsapp number"
              href={`https://wa.me/+201067439828`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp />
            </a> */}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;

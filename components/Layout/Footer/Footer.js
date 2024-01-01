import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaBehance, FaYoutube } from "react-icons/fa";
import styles from "styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className="col-md-3" md={3}>
            <div className={styles.imageContainer}>
              <Image
                layout={"fill"}
                objectFit={"contain"}
                src={"/images/logo.webp"}
                alt="تصميم و برمجة شركة دلتاوي للبرمجيات وتصميم المواقع و تطبيقات الموبايل"
              />
            </div>
          </div>
          <div className={"col-md-3"} md={3}>
            <ul className={styles.ListUL}>
              <li>
                <p>روابط مختصرة</p>
              </li>
              <li>
                <Link href={"/"}>الرئيسية </Link>
              </li>
              <li>
                <Link href={"/about"}>من نحن </Link>
              </li>
              <li>
                <Link href={"/apps"}>تطبيقات دلتاوى</Link>
              </li>
            </ul>
          </div>
          <div className={"col-md-3"} md={3}>
            <ul className={styles.ListUL}>
              <li>
                <p>روابط مختصرة</p>
              </li>
              <li>
                <Link href={"/article"}>المدونة </Link>
              </li>
              <li>
                <Link href={"/projects/accounting/برنامج-محاسبي"}>برنامج حسابات دلتاوي </Link>
              </li>
              <li>
                <Link href={"/service"}>الخدمات </Link>
              </li>
              <li>
                <Link href={"/website"}> مواقع دلتاوي </Link>
              </li>
              <li>
                <Link href={"/projects"}> برامج دلتاوي </Link>
              </li>
            </ul>
          </div>{" "}
          <div className={"col-md-3"} md={3}>
            <ul className={styles.ListUL}>
              <li>
                <p>روابط مختصرة</p>
              </li>

              <li>
                <a target="_blank" href={"https://deltawy.com/apps.index.xml"}>    تطبيقات الشركة </a>
              </li>
              <li>
                <a target="_blank" href={"https://deltawy.com/website.index.xml"}>      مواقع الشركة </a>
              </li>
              <li>
                <a target="_blank" href={"https://deltawy.com/services.index.xml"}>       خدمات الشركة </a>
              </li>
              <li>
                <a target="_blank" href={"https://deltawy.com/articles.index.xml"}>       مدونة الشركة </a>
              </li>
              <li>
                <a target="_blank" href={"https://deltawy.com/videos.index.xml"}>       فيديوهات الشركة </a>
              </li>
              <li>
                <a target="_blank" href={"https://deltawy.com/projects.index.xml"}>       برمجيات الشركة </a>
              </li>
              <li>
                <a target="_blank" href={"https://deltawy.com/sitemap-0.xml"}>خريطة الموقع </a>
              </li>
            </ul>
          </div>
          <div className={"col-md-12"} md={8}>
            <div className={styles.iconsSec}>
              <a
                aria-label="our facebook application"
                href={`https://www.facebook.com/deltawyNet/`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.span_div}
              >
                <FaFacebookF />
                Facebook
              </a>

              <a
                aria-label="our linkedin application"
                href={"https://www.linkedin.com/company/deltawy/mycompany/"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.span_div}
              >
                <FaLinkedinIn />
                Linkedin
              </a>

              <a
                aria-label="our instagram application"
                href={"https://www.instagram.com/deltawy.in/"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.span_div}
              >
                <AiFillInstagram />
                Instagram
              </a>
              <a
                aria-label="our twitter application"
                href={"https://twitter.com/deltawynet"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.span_div}
              >
                <FaTwitter />
                Twitter
              </a>
              <a
                aria-label="our youtube application"
                href={"https://www.youtube.com/@deltawymediachannel2760/videos"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.span_div}
              >
                <FaYoutube />
                Youtube
              </a>
              <a
                aria-label="our instagram application"
                href={"https://www.instagram.com/deltawy.in/"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.span_div}
              >
                <AiFillInstagram />
                Instagram
              </a>
              <a
                aria-label="our behance application"
                href={"https://www.behance.net/deltawy-media"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.span_div}
              >
                <FaBehance />
                Behance
              </a>
              <a
                aria-label="00201550841119"
                href={"tel:00201550841119"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.span_div}
              >
                <BsTelephoneFill />
                00201550841119
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center">جميع الحقوق محفوظة لدى دلتاوى © </p>
      </div>
    </footer>
  );
};

export default Footer;

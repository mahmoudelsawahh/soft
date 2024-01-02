import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import styles from "styles/Navbar.module.css";
import { useRouter } from "next/router";
import { AiFillInstagram, AiOutlineMenu } from "react-icons/ai";
// AiOutlineMenu
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import logo from '/public/images/logo.webp'
import { BsWhatsapp } from "react-icons/bs";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaBehance, FaYoutube } from "react-icons/fa";
// BsWhatsapp
import Collapse from 'react-bootstrap/Collapse';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [max, setMax] = useState(0);
  useEffect(() => {
    setMax(window.innerWidth);
  }, [max]);
  const router = useRouter();
  return (
    <div className={styles.navbar}>
      {/* Nav Mobile */}
      {max <= 700 &&
        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
          <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title>
      
         </Offcanvas.Title> */}
            <div className={`${styles.image_container} text-center ImageOff`}>
              <Image
                src={logo}
                layout={"fill"}
                objectFit={"contain"}
                alt={"logo"}
              />
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* <Accordion> */}
            <div className={styles.MobNavLinks}>
              <Link
                title={"Mobile Home"}

                href={"https://deltawy-soft.com"}
                className={router.pathname === "https://deltawy-soft.com" ? styles.active : styles.link}
              >
                الرئيسية
              </Link>
              <Link
                title={"Mobile projects"}

                href={"https://deltawy-soft.com/%d9%85%d9%86-%d9%86%d8%ad%d9%86"}
                className={
                  router.pathname === "https://deltawy-soft.com/%d9%85%d9%86-%d9%86%d8%ad%d9%86" ? styles.active : styles.link
                }
              >
                 من نحن
              </Link>

              <Link
                title={"Mobile website"}

                href={"https://deltawy-soft.com/%d8%a7%d9%84%d8%ae%d8%af%d9%85%d8%a7%d8%aa/"}
                className={
                  router.pathname === "https://deltawy-soft.com/%d8%a7%d9%84%d8%ae%d8%af%d9%85%d8%a7%d8%aa" ? styles.active : styles.link
                }
              >
                 الخدمات
              </Link>
              <Link
                title={"Mobile apps"}

                href={"https://deltawy-soft.com/%d8%a7%d9%84%d9%85%d9%88%d8%a7%d9%82%d8%b9/"}
                className={
                  router.pathname === "https://deltawy-soft.com/%d8%a7%d9%84%d9%85%d9%88%d8%a7%d9%82%d8%b9/" ? styles.active : styles.link
                }
              >
                 المواقع
              </Link>
              
              <a
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                الخدمات
                {open ? <IoIosArrowBack /> : <IoIosArrowDown />}

              </a>

              <Link
                title={"Mobile videos"}

                href={"https://deltawy-soft.com/%d8%a7%d9%84%d8%a8%d8%b1%d8%a7%d9%85%d8%ac/"}
                className={
                  router.pathname === "https://deltawy-soft.com/%d8%a7%d9%84%d8%a8%d8%b1%d8%a7%d9%85%d8%ac/" ? styles.active : styles.link
                }
              >
                البرامج
              </Link>
              <Link
                title={"Mobile article"}

                href={"/"}
                className={
                  router.pathname === "/" ? styles.active : styles.link
                }
              >
                المدونة
              </Link>
              <Link
                title={"Mobile about"}

                href={"https://deltawy-soft.com/%d8%a7%d9%84%d9%81%d9%8a%d8%af%d9%8a%d9%88%d9%87%d8%a7%d8%aa/"}
                className={
                  router.pathname === "https://deltawy-soft.com/%d8%a7%d9%84%d9%81%d9%8a%d8%af%d9%8a%d9%88%d9%87%d8%a7%d8%aa/" ? styles.active : styles.link
                }
              >
                الفيديوهات 
              </Link>
              <Link
                title={"Mobile cv"}
                href={"https://deltawy-soft.com/%d8%a7%d9%84%d8%aa%d9%88%d8%a7%d8%b5%d9%84-%d9%85%d8%b9%d9%86%d8%a7/"}
                className={
                  router.pathname === "https://deltawy-soft.com/%d8%a7%d9%84%d8%aa%d9%88%d8%a7%d8%b5%d9%84-%d9%85%d8%b9%d9%86%d8%a7" ? styles.active : styles.link
                }
              >
                 تواصل معنا
              </Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      }

      <Container fluid>
        <Row className={styles.center}>
          <Col xs={6} md={2} className="d-block d-lg-none">
            <button
              aria-label="menu"
              name="menu"
              className={styles.menu_Btn}
              onClick={handleShow}
            >
              <AiOutlineMenu />
            </button>
          </Col>
          <Col xs={6} md={3} lg={2}>
            <div
              className={`${styles.image_container}`}
              onClick={() => router.push("/")}
            >
              <Image
                src={logo}
                layout={"fill"}
                objectFit={"contain"}
                alt={"logo"}
              />
            </div>
          </Col>
          <Col lg={10} xl={7} className="d-none d-lg-block">
            <div className={styles.NavLinks}>
              <Link
                title={"web Home"}

                href={"https://deltawy-soft.com"}
                className={
                  router.pathname === "https://deltawy-soft.com" ? styles.active : styles.link
                }
              >
                الرئيسية
              </Link>
              <Link
                title={"web projects"}

                href={"https://deltawy-soft.com/%d9%85%d9%86-%d9%86%d8%ad%d9%86/"}
                className={
                  router.pathname === "https://deltawy-soft.com/%d9%85%d9%86-%d9%86%d8%ad%d9%86" ? styles.active : styles.link
                }
              >
                 من نحن
              </Link>
              <Link
                title={"web website"}

                href={"/https://deltawy-soft.com/%d8%a7%d9%84%d8%ae%d8%af%d9%85%d8%a7%d8%aa/"}
                className={
                  router.pathname === "/https://deltawy-soft.com/%d8%a7%d9%84%d8%ae%d8%af%d9%85%d8%a7%d8%aa/" ? styles.active : styles.link
                }
              >
                 الخدمات
              </Link>
              <Link
                title={"web apps"}

                href={"https://deltawy-soft.com/%d8%a7%d9%84%d9%85%d9%88%d8%a7%d9%82%d8%b9/"}
                className={
                  router.pathname === "https://deltawy-soft.com/%d8%a7%d9%84%d9%85%d9%88%d8%a7%d9%82%d8%b9/" ? styles.active : styles.link
                }
              >
                المواقع
              </Link>
            
              <Link
                title={"web videos"}

                href={"https://deltawy-soft.com/%d8%a7%d9%84%d8%a8%d8%b1%d8%a7%d9%85%d8%ac/"}
                className={
                  router.pathname === "https://deltawy-soft.com/%d8%a7%d9%84%d8%a8%d8%b1%d8%a7%d9%85%d8%ac/" ? styles.active : styles.link
                }
              >
                البرامج
              </Link>
              <Link
                title={"web article"}

                // href={"/"}

                href={"/"}
                className={
                  router.pathname === "/" ? styles.active : styles.link
                }
              >
                المدونة
              </Link>
              <Link
                title={"web about"}

                href={"https://deltawy-soft.com/%d8%a7%d9%84%d9%81%d9%8a%d8%af%d9%8a%d9%88%d9%87%d8%a7%d8%aa"}
                className={
                  router.pathname === "https://deltawy-soft.com/%d8%a7%d9%84%d9%81%d9%8a%d8%af%d9%8a%d9%88%d9%87%d8%a7%d8%aa" ? styles.active : styles.link
                }
              >
                 الفيديوهات
              </Link>
              <Link
                title={"web cv"}

                href={"https://deltawy-soft.com/%d8%a7%d9%84%d8%aa%d9%88%d8%a7%d8%b5%d9%84-%d9%85%d8%b9%d9%86%d8%a7/"}
                className={
                  router.pathname === "https://deltawy-soft.com/%d8%a7%d9%84%d8%aa%d9%88%d8%a7%d8%b5%d9%84-%d9%85%d8%b9%d9%86%d8%a7/" ? styles.active : styles.link
                }
              >
                تواصل معانا 
              </Link>
            </div>
          </Col>
          {max >= 700 && (
            <Col md={2} className="d-none d-xl-block">
              <>
                <div className={styles.iconsSec}>
                  <a
                    aria-label="our facebook application"
                    href={`https://www.facebook.com/deltawyNet/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.span_div}
                  >
                    <FaFacebookF />
                  </a>


                  <a
                    aria-label="our linkedin application"
                    href={"https://www.linkedin.com/company/deltawy/mycompany/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.span_div}
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    aria-label="our youtube application"
                    href={"https://www.youtube.com/@deltawymediachannel2760/videos"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.span_div}
                  >
                    <FaYoutube />
                  </a>
                  <a
                    aria-label="our instagram application"
                    href={"https://www.instagram.com/deltawy.in/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.span_div}
                  >
                    <AiFillInstagram />
                  </a>
                  <a
                    aria-label="our twitter application"
                    href={"https://twitter.com/deltawynet"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.span_div}
                  >
                    <FaTwitter />
                  </a>
                  <a
                    aria-label="our behance application"
                    href={"https://www.behance.net/deltawy-media"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.span_div}
                  >
                    <FaBehance />
                  </a>
                </div>
                <div className={styles.question}>
                  <div>
                    <span>هل لديك اي استفسار؟</span>
                    <p>201067439828+</p>
                  </div>
                  <BsWhatsapp />
                </div>
              </>
            </Col>
          )}
        </Row>
      </Container>
    </div >
  );
};

export default NavBar;

// import axios from "axios";
import ShareIcon from "components/Layout/ShareIcon/ShareIcon";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import styles from "styles/Servisec.module.css";
// import Script from "next/script";
import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";


const lazyify = (data) => {
  data = data.replace(/\[.*caption.*\]/, "");
  return data;
}
const Article = () => {
  const [localUrl, setLocalUrl] = useState(null)
  useEffect(() => {
    setLocalUrl(window.location.href)
  })
  const router = useRouter();
  const { Url } = useSelector((state) => state.HomeSlice);
  const [Artical , setArtical] = useState()
  const [ArtImage , setArtImage] = useState(null)
  const [GetLastPosts , setGetLastPosts] = useState(null)


  useEffect(()=>{
    async function fetchData() {
      const res = await fetch(`https://deltawy-soft.com/wp-json/wp/v2/posts/${router.query.articlesID}`)
      const data = await res.json()
      setArtical(data)
      if(data){
        const resImage = await fetch(`https://deltawy-soft.com/wp-json/wp/v2/media/${data.featured_media}`)
        const finalImage = await resImage.json()
        setArtImage(finalImage)
      }
    }

    async function fetchMediaData() {
      const getLastMedia = await fetch(`https://deltawy-soft.com/wp-json/wp/v2/media`)
      const getLastMediaData = await getLastMedia.json()
      setGetLastPosts(getLastMediaData)
    }

    fetchMediaData()

    fetchData()
  },[])

  
  const LatestArticals =
   GetLastPosts &&
   GetLastPosts.map((ele, idx) => {
      const PathName = ele.title.rendered.replace(/\s/g, "-");

      return (
        <div
          key={idx}
          className={styles.artical}
          onClick={() => router.push(`/article/${ele.post}/${PathName}`)}
        >
          <div className={styles.Art_image_container}>
            <Image
              src={ele.source_url}
              alt={ele.title.rendered}
              width={50}
              height={50}
            />
          </div>
          <Link title={ele.title.rendered} href={`/article/${ele.post}/${PathName}`}> {ele.title.rendered}</Link>
        </div>
      );
    });

  return (
    <>
          <Head>
             <title>{Artical ? Artical.title.rendered : "اخر المقالات"}</title>
             <meta name="description" content={Artical ? Artical.content.rendered : ""}/>
          </Head>
    {Artical ? 
      <>
           
          <div className={styles.services}>
        <Container>
          <h1 className="mainHeading"> {Artical.title.rendered}</h1>
          <Row>
            <Col md={8}>
              {/* <div className={styles.shad}> */}
              <div className={styles.image_container} >
                {ArtImage ? 
                  <Image
                  src={ArtImage.source_url}
                  width={200}
                  height={200}
                  objectFit={"contain"}
                  layout={"fill"}
                  priority
                  alt={Artical.name}
                />
                : null}
              </div>
              {/* </div> */}
              <div
                id={"artContent"}
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: Artical.content.rendered }}
              ></div>
              <ShareIcon />
            </Col>
            <Col md={4}>
              <div className={styles.latest}>
                <h2 className="text-center">اخر المقالات</h2>
                {LatestArticals}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      </>
    : 
    
         <div style={{height : '90vh', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
         <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
         </div>
    }
    </>
  );
};

export default Article;

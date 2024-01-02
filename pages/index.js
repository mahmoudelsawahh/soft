import Head from "next/head";
import parse from 'html-react-parser';
import 'moment/locale/ar';
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "store/HomeSlice";
import styles from "styles/Card.module.css";
import axios from "axios";
import moment from "moment/moment";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { RotatingLines } from "react-loader-spinner";

// import styles from "styles/Articales.module.css"
const Articles = () => {
const [data , setData] = useState(null)
const pageSize = 10;
let [currentPage , setCurrentPage] = useState(1)
let [totlaPage , setTotlaPage] = useState(1)
const [loading , setLoading] = useState(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

 useEffect(()=>{
  async function fetchData() {    
  try {
    setLoading(true)
    const postsResponse = await axios.get(`https://deltawy-soft.com/wp-json/wp/v2/posts?page=${currentPage}&per_page=${pageSize}`);
    const posts = postsResponse.data;
    const totalPages = postsResponse.headers['x-wp-totalpages'];
    setLoading(false)
   if(totalPages == 1){
    setTotlaPage(totalPages)
   }
    const promises = posts.map(async post => {
      const featuredMediaId = post.featured_media;
      
      if (featuredMediaId) {
        setLoading(true)
        const mediaResponse = await axios.get(`https://deltawy-soft.com/wp-json/wp/v2/media/${featuredMediaId}`);
        const media = mediaResponse.data;
        setLoading(false)
        return {
                    id : post.id,
                    imageLink : media.source_url,
                    name :  post.title.rendered,
                    data :  moment(post.date).locale('ar').format('LL'),
                    shortDescription : post.content.rendered.replace(/<[^>]+>/g, ''),
        };
      }
    });
    
    const results = await Promise.all(promises);
    
    const combinedData = results.filter(result => result !== undefined);
    
    setData(combinedData);

  } catch (error) {
    console.error('حدث خطأ في استرداد البيانات', error);
  }
}

fetchData();
 },[currentPage])

const router = useRouter();
  const { Url } = useSelector((state) => state.HomeSlice);

  const articales =
    data ?  data.map((ele, idx) => {
      const PathName = ele.name.replace(/\s/g, "-");
      return (
        <>
          <Head>
            <title>   مقالات شركة دلتاوي   </title>
            <link rel="canonical" href="https://deltawy.com/article" />

            {/* <!-- HTML Meta Tags --> */}
            <meta name="description" content="مقالات شركة دلتاوي" />

            {/* <!-- Google / Search Engine Tags --> */}
            <meta itemprop="name" content="مقالات شركة دلتاوي" />
            <meta itemprop="description" content="مقالات شركة دلتاوي" />
            <meta itemprop="image" content={`${Url}/imagess?id=1832`} />

            <meta
              property="og:url" content="https://deltawy.com/article" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="مقالات شركة دلتاوي" />
            <meta property="og:description" content="مقالات شركة دلتاوي" />
            <meta property="og:image" content={`${Url}/imagess?id=1832`} />

            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="مقالات شركة دلتاوي" />
            <meta name="twitter:description" content="مقالات شركة دلتاوي" />
            <meta name="twitter:image" content={`${Url}/imagess?id=1832`} />

          </Head>

          <Col key={idx} md={4}>
            <div
              className={styles.articalCard}
              onClick={() => router.push(`/article/${ele.id}/${PathName}`)}
            >
              <div className={styles.image_card}>
                <Image
                  src={ele.imageLink}
                  width={350}
                  height={200}
                  layout={"responsive"}
                  alt={ele.name}
                />
                <div className={styles.date}>
                  {ele.data}
                  <BsFillCalendarDateFill />
                </div>
              </div>
              <div className={styles.content}>
                <Link
                  href={`/article/${ele.id}/${PathName}`}
                  className={styles.link}
                >
                  {ele.name}
                </Link>
                <p>{ele.shortDescription}</p>
                <hr />
                <div className={styles.social}>
                  <span>
                    <FaFacebookSquare />
                  </span>
                  <span>
                    <FaLinkedin />
                  </span>
                  <span>
                    <FaTwitterSquare />
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </>
      );
    }) : 
    
//     <div style={{height : '90vh', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
//     <RotatingLines
//    strokeColor="grey"
//    strokeWidth="5"
//    animationDuration="0.75"
//    width="96"
//    visible={true}
//  />
//     </div>
null
  return (
   <>
      <Head>
        <title>اخر المقالات</title>
      </Head>
      <div className={styles.Articles}>
      <h1 className="mainHeading">اخر المقالات</h1>
      <Container>
        <Row>{loading ? 
          <div style={{height : '90vh', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
           <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
           </div>
        : articales}</Row>
        <PaginationControl
    page={totlaPage}
    between={5}
    total={250}
    limit={20}
    changePage={(page) => {
      setTotlaPage(page)
      setCurrentPage(page)
      scrollToTop()
    }}
    ellipsis={1}
  />
      </Container>
    </div>
   </>
  );
};

export default Articles;

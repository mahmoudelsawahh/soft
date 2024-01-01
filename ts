//  <Head>
//         <title> {Artical.name}</title>
//         {/* <!-- HTML Meta Tags --> */}
//         <meta name="description" content={Artical.shortDescription.slice(0, 160)} />

//         {/* <!-- Google / Search Engine Tags --> */}
//         <meta itemProp="name" content={Artical.name} />
//         <meta itemProp="description" content={Artical.shortDescription.slice(0, 160)} />
//         <meta itemProp="image" content={`${Url}/imagess?id=${Artical.imageId}`} />

//         {/* <!-- Facebook Meta Tags --> */}
//         {/* <meta
//           property="og:url"
//           content="https://deltawy.com/projects/accounting/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D9%8A"
//         /> */}
//         <meta property="og:type" content="Article" />
//         <meta property="og:title" content={Artical.name} />
//         <meta property="og:description" content={Artical.shortDescription.slice(0, 160)} />
//         <meta property="og:image" content={`${Url}/imagess?id=${Artical.imageId}`} />

//         {/* <!-- Twitter Meta Tags --> */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={Artical.name} />
//         <meta name="twitter:description" content={Artical.shortDescription.slice(0, 160)} />
//         <meta name="twitter:image" content={`${Url}/imagess?id=${Artical.imageId}`} />
//         {/* <!-- Meta Tags Generated via http://heymeta.com --> */}



//         <script type="application/ld+json" key="structured-data">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Article",
//             headline: `${Artical.name}`,
//             alternativeHeadline: `${Artical.name}`,
//             image: `${Url}/imagess?id=${Artical.imageId}`,
//             author: "Deltawy",
//             award: "Best article ever written",
//             editor: "Deltawy",
//             genre: "search engine optimization",
//             keywords: `${[...Artical.tags]}`,
//             wordcount: `${Artical.wordCount}`,
//             publisher: {
//               "@type": "Organization",
//               name: "deltawy",
//               logo: {
//                 "@type": "ImageObject",
//                 url: "/logo.webp",
//               },
//             },
//             url: localUrl,
//             mainEntityOfPage: {
//               "@type": "WebPage",
//               "@id": `https://deltawy.com/article/${Artical.id}`,
//             },
//             datePublished: `${Artical.dat}`,
//             dateCreated: `${Artical.dat}`,
//             dateModified: `${Artical.dat}`,
//             deScription: `${Artical.shortDescription.slice(0, 160)}`,
//             articleBody: `${Artical.parsedContent}`,
//           })}
//         </script>

        
//       </Head>
//       <div className={styles.services}>
//         <Container>
//           <h1 className="mainHeading"> {Artical.name}</h1>
//           <Row>
//             <Col md={8}>
//               {/* <div className={styles.shad}> */}
//               <div className={styles.image_container} >
//                 <Image
//                   src={`${Url}/imagess?id=${Artical.imageId}`}
//                   width={200}
//                   height={200}
//                   objectFit={"contain"}
//                   layout={"fill"}
//                   priority
//                   alt={Artical.name}
//                 />
//               </div>
//               {/* </div> */}
//               <div
//                 id={"artContent"}
//                 className={styles.content}
//                 dangerouslySetInnerHTML={{ __html: lazyify(Artical.description) }}
//               ></div>
//               <ShareIcon />
//             </Col>
//             <Col md={4}>
//               <div className={styles.latest}>
//                 <h2 className="text-center">اخر المقالات</h2>
//                 {/* {LatestArticals} */}
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
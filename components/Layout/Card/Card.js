import React from "react";
import Image from "next/legacy/image";
import styles from "styles/Card.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const Card = ({ name, imageId, id, type }) => {
  const router = useRouter();
  const PathName = name.replace(/\s/g, "-");
  const {Url} = useSelector(state => state.HomeSlice)
  return (
    <div
      className={styles.Card}
      onClick={() => {
        if (type === "app") {
          router.push(`/apps/${id}/${PathName}`  );
        }
        else if(type ==="website") {
          router.push(`/website/${id}/${PathName}` );
        }
        else {
          router.push(`/projects/${id}/${PathName}` );
        }
       
      }}
    >
      <div className={styles.CardImageContainer}>
        <Image
          // layout="responsive"
          width={300}
          height={300}
          layout={"responsive"}
          src={`${Url}/imagess?id=${imageId}`}
          alt={name}
        />
      </div>
      {/* <p className={styles.card_p}> </p> */}
      <Link
      title={name}
        className={styles.link_detail}
        href={type === "app" ? `/apps/${id}/${PathName}` : type === "projects" ? `/projects/${id}/${PathName}` : `/website/${id}/${PathName}`}
        passHref
        scroll={false}
      >
       {name}
      </Link>
    </div>
  );
};

export default Card;

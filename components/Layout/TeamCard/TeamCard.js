import Image from "next/legacy/image";
import React from "react";
import { useSelector } from "react-redux";
import styles from "styles/Card.module.css";
const TeamCard = ({name ,description ,imageId , link}) => {
  const {Url} = useSelector(state => state.HomeSlice)
  return (
    <div className={styles.articalCard}>
      <div className={styles.TeamImage}>
        <Image src={`${Url}/imagess?id=${imageId}`} alt={name} width={200} height={300}   />
        <div className={styles.social}></div>
      </div>
      <div className={styles.TeamDescription}>
        <p className={styles.Team_Name}>{name}</p>
        <p className={styles.teamJob}> {link}</p>
      </div>
    </div>
  );
};

export default TeamCard;

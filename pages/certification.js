import Navbar from '@/common/Navbar';
import styles from "../styles/Certification.module.css";


const Certification = ({ name, description, certificateUrl, imageUrl }) => {
  return (
    <>
    <Navbar/>
    <div className={styles.certification}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <a href="https://live.staticflickr.com/65535/52718766247_19137f5787_o.png" target="_blank" rel="noreferrer">
        <button className={styles.certificateButton}>View Certificate</button>
      </a>
    </div>
    </>
  );
};

export default Certification;





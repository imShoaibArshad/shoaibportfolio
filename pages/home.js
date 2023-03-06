import Navbar from "@/common/Navbar";
import styles from '../styles/Home.module.css'

const home = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Software Engineer</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.heading}>Objective</h2>
          <p className={styles.text}>
            As a software engineer, my objective is to utilize my skills in creating software solutions that meet the needs of clients while utilizing the latest technologies and methodologies. I strive to continuously improve my skills to provide the best possible results for my clients.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          Software Engineer &copy; {new Date().getFullYear()} , {new Date().getDate()}
        </p>
      </footer>
    </div>

    <section id="about-me" className="container">


      <div>
        <h1>
          Hi, I'm Muhammad Shoaib Arshad! <image src="" alt="wave hand" width={60} height={60} />
        </h1>
        <p>
          Software Engineer with excellent problem solving and critical thinking abilities, seeks hands on experience within
          a company. Effective communicator who builds positive, cohesive relationship with all level of staff, eager to put
          my engineering knowledge to practical, applied use
        </p>
      </div>
      <div>
        <image src="https://www.flickr.com/photos/197875435@N08/52722790766/in/dateposted-public/" alt="profile image" width={500} height={500} className="" />
      </div>
    </section>

    </>
  );
};

export default home

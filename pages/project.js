import Navbar from "@/common/Navbar";
import styles from "../styles/project.module.css";

const ProjectsPage = () => {
  const projects = [
    {
      projectName: "COUNTER-APP",
      imgSrc: "https://live.staticflickr.com/65535/52718766247_19137f5787_o.png",
      description: "Counter-App is built using Next.js ,which simply allowing users to increment and decrement a counter value.  The interface features two buttons, one labeled Increment and the other Decrement ,the value will remain at zero and will not go into negative numbers.",
      githubLink: "https://github.com/imShoaibArshad/counterapp",
      deployLink: "https://example1.com",
    },
    {
      projectName: "Ecommerce-chatbot-website ",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Crystal_Project_computer.png",
      description: "Ecommerce-Chatbot-Website is a service that offers custom-made chatbots to different organizations for their websites. The chatbots are designed to assist customers in their online shopping experience, answering questions, providing recommendations, and helping with the checkout process",
      githubLink: "https://github.com/imShoaibArshad/Ecommerce-chatbot-website",
      deployLink: "https://example2.com",
    },
    {
      projectName: "Simple-Interest-Calculator ",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Crystal_Project_computer.png",
      description: "Simple-Interest-Calculator is a web-based application built using HTML, CSS, and JavaScript. The application is designed to calculate simple interest on a given principal amount, interest rate, and time period..",
      githubLink: "https://github.com/example3",
      deployLink: "https://example3.com",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className={styles.projects}>
        {
          projects.map((project)=>{
            const {projectName, imgSrc, description, githubLink, deployLink} = project     // Object Destructuring
            return(
              <>
                      <div key={projectName} className={styles.project}>
          <img src={imgSrc} alt="project" className={styles.imageStyle}/>
          <h3 className={styles.projectName}>{projectName}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.links}>
            <a href={githubLink} target="_blank">
              <button className={styles.linkButton}>GitHub Link</button>
            </a>
            <a href={deployLink} target="_blank">
              <button className={styles.linkButton}>Deploy Link</button>
            </a>
          </div>
        </div>
              </>
            )
          })
        }

    </div>
    </>
  );
};

export default ProjectsPage;







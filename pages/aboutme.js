
import { useState } from 'react'
import Navbar from "@/common/Navbar";
import styles from "../styles/Aboutme.module.css"


const aboutpage = () => {
  const [activeTab, setActiveTab] = useState('personal')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <>
      <Navbar />
      <div className={styles.header}>
        <h1><center>About Me</center></h1>
        <p><center>Learn more about me and my experience.</center></p>
      </div>
      <div className={`${styles.tabs} tabs`}>
        <button
          className={activeTab === 'personal' ? styles.active : ''}
          onClick={() => handleTabClick('personal')}
        >
          Personal Info
        </button>
        <button
          className={activeTab === 'objective' ? styles.active : ''}
          onClick={() => handleTabClick('objective')}
        >
          Objective
        </button>
        <button
          className={activeTab === 'skills' ? styles.active : ''}
          onClick={() => handleTabClick('skills')}
        >
          Technical Skills
        </button>
        <button
          className={activeTab === 'education' ? styles.active : ''}
          onClick={() => handleTabClick('education')}
        >
          Education & Academic Performance
        </button>
        <button
          className={activeTab === 'experience' ? styles.active : ''}
          onClick={() => handleTabClick('experience')}
        >
          Work Experience
        </button>
        <button
          className={activeTab === 'achievements' ? styles.active : ''}
          onClick={() => handleTabClick('achievements')}
        >
          Achievements
        </button>
        <button
          className={activeTab === 'links' ? styles.active : ''}
          onClick={() => handleTabClick('links')}
        >
          Links
        </button>
      </div>
      <div className={`${styles.content} content`}>
        {activeTab === 'personal' && (
          <p>Hello, my name is [YOUR NAME] and I am a [YOUR JOB TITLE/ROLE]. I have [X YEARS/MONTHS] of experience in [YOUR FIELD/INDUSTRY].</p>
        )}
        {activeTab === 'objective' && (
          <p>[INSERT YOUR OBJECTIVE OR GOAL HERE]</p>
        )}
        {activeTab === 'skills' && (
          <ul>
            <li>[SKILL 1]</li>
            <li>[SKILL 2]</li>
            <li>[SKILL 3]</li>
            <li>[SKILL 4]</li>
            <li>[SKILL 5]</li>
          </ul>
        )}
        {activeTab === 'education' && (
          <ul>
            <li>[DEGREE], [MAJOR], [UNIVERSITY], [GRADUATION YEAR]</li>
            <li>[DEGREE], [MAJOR], [UNIVERSITY], [GRADUATION YEAR]</li>
            <li>[DEGREE], [MAJOR], [UNIVERSITY], [GRADUATION YEAR]</li>
          </ul>
        )}
        {activeTab === 'experience' && (
          <ul>
            <li>[JOB TITLE], [COMPANY], [DATES EMPLOYED]</li>
            <li>[JOB TITLE], [COMPANY],, [DATES EMPLOYED]</li>
            </ul>
        )}
        {activeTab === 'achievements' && (
          <ul>
          <li>[ACHIEVEMENT 1]</li>
          <li>[ACHIEVEMENT 2]</li>
          <li>[ACHIEVEMENT 3]</li>
          <li>[ACHIEVEMENT 4]</li>
          <li>[ACHIEVEMENT 5]</li>
          </ul>
          )}
          {activeTab === 'links' && (
          <ul>
          <li><a href="[LINK TO YOUR LINKEDIN PROFILE]">LinkedIn</a></li>
          <li><a href="[LINK TO YOUR GITHUB PROFILE]">GitHub</a></li>
          <li><a href="[LINK TO YOUR PERSONAL WEBSITE]">Personal Website</a></li>
          </ul>
          )}
          </div>
          </>
          )
          }

export default aboutpage


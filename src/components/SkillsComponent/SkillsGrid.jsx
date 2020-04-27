import React from 'react'
import TextComponent from './TextComponent'
import ImageComponent from './ImageComponent'
import styles from './SkillsComponent.module.scss'

const SkillsGrid = (props) => {
  console.log(props)
  return (
    <div className={styles.skills_grid}>
      <div className={styles.row}>
        <ImageComponent id={styles.webdev} />
        <TextComponent
          title="Web Development"
          subtitle="Translating Ideas into Code"
          text="I design creative, fully functional apps using predominantly
                  React and pure CSS/SASS. I care about every detail of the user
                  experience, from accessibility and responsiveness to micro-interactions. I am equally comitted to writing clean,
                  reusable code. While my passion lies on the frontend, I also have fullstack experience using Ruby on Rails, PostgreSQL, and AWS. Your team uses different languages and frameworks? I am always up for a challenge and eager to learn!"
        />
      </div>
      <div className={styles.row}>
        <TextComponent
          title="Design and Creative"
          subtitle="Web Assets, Icons, and Animations"
          text="A unique and innovative application calls for equally original graphics. I know my way around Adobe Illustrator, Photoshop, and After Effects, and I hand draw using Procreate on the iPad Pro. In personal projects, I often choose to design my own icons, illustrations, and graphics for a cohesive and fully customized design. While I'm always tinkering with SVG's, I put just as much attention into making sure graphics are optimized for a fast and seamless experience."
        />
        <ImageComponent id={styles.design} />
      </div>
      <div className={styles.row}>
        <ImageComponent id={styles.webdev} />
        <TextComponent
          title="Project Management"
          subtitle="Teamwork and Agile Methodologies"
          text="With over 10 years of sales and management experience, I am highly skilled at effective communication, time management, and interacting with clients. I've lead stand-ups to make sure the team is aligned on the same page, blocker-free, and on track to meet deadlines, as well as retros to reflect on progress. Most importantly, I always have a positive attitude and make an effort to uplift those around me."
        />
      </div>
    </div>
  )
}

export default SkillsGrid

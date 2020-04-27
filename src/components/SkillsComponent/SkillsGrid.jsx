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
                  reusable code, and designing optimized graphics for an overall
                  seamless experience."
        />
      </div>
      <div className={styles.row}>
        <TextComponent
          title="Design and Creative"
          subtitle="Web Assets, Icons, and Animations"
          text="lorem ipsum"
        />
        <ImageComponent id={styles.design} />
      </div>
      <div className={styles.row}>
        <ImageComponent id={styles.webdev} />
        <TextComponent
          title="Project Management"
          subtitle="Idea to Mockup to Code"
          text="I design creative, fully functional apps using predominantly
                  React and pure CSS/SASS. I care about every detail of the user
                  experience, from accessibility and responsiveness to the
                  unexpected animations. I am equally comitted to writing clean,
                  reusable code, and designing optimized graphics for an overall
                  seamless experience."
        />
      </div>
    </div>
  )
}

export default SkillsGrid

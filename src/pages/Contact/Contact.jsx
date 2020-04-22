import React from 'react'
import styles from '../Contact/Contact.module.scss'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Parallax } from 'react-scroll-parallax'

function Contact() {
  return (
    <ScrollableAnchor id={'Contact'}>
      <div className={styles.contact_container}>
        <div className={styles.contact_container_content}>
          <p>Rene Breslauer</p>
          <p>(954) 609-2597</p>
          <p>Renebreslauer@me.com</p>
        </div>
      </div>
    </ScrollableAnchor>
  )
}

export default Contact

import React from 'react'
import styles from '../Contact/Contact.module.scss'
import ScrollableAnchor from 'react-scrollable-anchor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)

function Contact() {
  return (
    <ScrollableAnchor id={'Contact'}>
      <div className={styles.contact_container}>
        <div className={styles.contact_container_header}>
          <h2>
            Still not convinced?&nbsp;&nbsp;
            <a href="#Home">Let's try that again</a>
          </h2>
        </div>
        <div className={styles.contact_container_body}>
          <div className={styles.contact_container_info}>
            <h3>Rene Breslauer</h3>
            <p>(954) 609-2597</p>
            <p>
              <a href={'mailto:renebreslauer@me.com'}>Renebreslauer@me.com</a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://renewreckingball.s3.us-east-2.amazonaws.com/Rene_Breslauer_Resume.pdf"
              >
                View My Resume
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/renebreslauer/wrecking_ball"
              >
                Source Code
              </a>
            </p>
          </div>
          <div className={styles.contact_container_links}>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/renebreslauer"
              >
                <FontAwesomeIcon
                  icon={['fab', 'github']}
                  className={styles.contact_container_links_icon}
                />
                Github
              </a>
            </p>
            <p>
              {' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/renebreslauer"
              >
                <FontAwesomeIcon
                  icon={['fab', 'linkedin-in']}
                  className={styles.contact_container_links_icon}
                />
                LinkedIn
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitter.com/renebreslauer/"
              >
                <FontAwesomeIcon
                  icon={['fab', 'twitter']}
                  className={styles.contact_container_links_icon}
                />
                Twitter
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.behance.net/renebreslauer"
              >
                <FontAwesomeIcon
                  icon={['fab', 'behance']}
                  className={styles.contact_container_links_icon}
                />
                Behance
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dribbble.com/renebreslauer"
              >
                <FontAwesomeIcon
                  icon={['fab', 'dribbble']}
                  className={styles.contact_container_links_icon}
                />
                Dribbble
              </a>
            </p>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
}

export default Contact

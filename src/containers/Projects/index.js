import Head from 'next/head'
import { Nav } from '../../components/Nav'
import { Profile } from '../../components/Profile'
import { ProjectItem } from './ProjectItem'

import { currentProjects, previousProjects } from './content'

import { motion } from 'framer-motion'
import styles from './Projects.module.css'

export const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Michael Gee</title>
        <meta
          name="description"
          content="A list of Michael Gee's past and present code projects."
        />
      </Head>

      <main id="page">
        <Nav />

        <div className="page-body">
          <Profile />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeIn', duration: 0.6 }}
            exit={{ opacity: 0, transition: 0 }}
            className="page-content"
          >
            <section>
              <h2 className="page-title">Current Projects</h2>
              <div className={styles.projectContainer}>
                {currentProjects.map(cp => {
                  return (
                    <ProjectItem
                      id={cp.id}
                      dates={cp.dates}
                      imageProps={{ src: cp.imageSrc, alt: cp.imageAlt }}
                      title={cp.title}
                      description={cp.description}
                      externalLinks={cp.externalLinks}
                      key={cp.id}
                    />
                  )
                })}
              </div>
            </section>

            <section>
              <h2 className="page-title">Past Projects</h2>

              <div className={styles.projectContainer}>
                {previousProjects.map(cp => {
                  return (
                    <ProjectItem
                      id={cp.id}
                      dates={cp.dates}
                      imageProps={{ src: cp.imageSrc, alt: cp.imageAlt }}
                      title={cp.title}
                      description={cp.description}
                      externalLinks={cp.externalLinks}
                      key={cp.id}
                    />
                  )
                })}
              </div>
            </section>
          </motion.div>
        </div>
      </main>
    </>
  )
}

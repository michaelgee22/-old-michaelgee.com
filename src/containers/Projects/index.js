import Head from 'next/head'
import { ProjectItem } from './ProjectItem'

import { currentProjects, previousProjects } from './content'

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

      <div className="page-content">
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
      </div>
    </>
  )
}

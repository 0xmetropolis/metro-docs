/*import React from 'react'
import Layout from '@theme/Layout'
import styles from './index.module.css'


import HomepageLogo from '../../static/img/homepageLogo.svg'

export default function Home() {
  return (
    <Layout>
      <ShaderComponent />
      <div>
        <HomepageLogo className={styles.logoText} />
        <h2 className={styles.headerSubtitle}>FOR DEVELOPERS</h2>
      </div>
      <main className={styles.layout}>
        <div className={styles.layoutFlexBox}>
          <div className={styles.gettingStartedFlexBox}>
            <p className={styles.gettingStarted}>Getting started</p>
            <a className={styles.viewAllLink} href="docs/guides/connect-wallet-react">
              <button className={styles.viewAll}>VIEW ALL</button>
            </a>
          </div>
          <GettingStartedCards />
          <p className={styles.tools}>Tools</p>
          <ToolsCards />
          <p className={styles.projects}>Projects using ZORA</p>
          <ProjectsCards />
        </div>
      </main>
    </Layout>
  )
}
Footer*/


import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { GettingStartedCards } from '../components/GettingStartedCards';
import { PodarchyGuidesCards } from '../components/PodarchyGuidesCards';
import styles from './index.module.css';
import HeroBannerLogo from '../../static/img/heroBannerLogo.svg'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <HeroBannerLogo className={styles.logoText} />
      </div>
    </header>
  );
}
/*
Bring these back into HomepageHeader above if we want text
<h1 className="hero__title">{siteConfig.title}</h1>
<p className="hero__subtitle">{siteConfig.tagline}</p>*/

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <div className={styles.layoutFlexBox}>
          <div className={styles.gettingStartedFlexBox}>
            <p className={styles.gettingStarted}>Getting started</p>
          </div>
      </div>
          <GettingStartedCards />
          <div className={styles.layoutFlexBox}>
          <div className={styles.gettingStartedFlexBox}>
          <p className={styles.gettingStarted}>Pod Onboarding Guides</p>
          </div>

          <PodarchyGuidesCards />
      </div>    
          <HomepageFeatures />
      </main>
    </Layout>
  );
}
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Survival (1.15.2)',
    imageUrl: 'img/Survival.png',
    description: (
      <>
        There are two 1.15.2 Survival worlds which include one with no hostile mobs (e.g. no monsters) and a second world with hostile mobs.  The 
        "No Monsters" world includes some NPC characters which sell most things you would normally get from killing hostile mobs.
      </>
    ),
  },
  {
    title: 'Creative (1.15.2)',
    imageUrl: 'img/Creative.png',
    description: (
      <>
        There are a couple of Creative worlds available which also include WorldEdit capabilities.
      </>
    ),
  },
  {
    title: 'Skyblock (1.15.2)',
    imageUrl: 'img/Skyblock.png',
    description: (
      <>
        Currently there is a Skyblock server running Iridium Skyblock.  This server includes both the Iridium Skyblock world as well as a Skyblock 
        hub with vendors who sell some items you can take back to your Skyblock world to enhance it.
      </>
    ),
  },
  {
    title: 'Minigames (1.15.2)',
    imageUrl: 'img/Minigames.png',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Creative Plotworld (1.15.2)',
    imageUrl: 'img/Plotworld.png',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: "Kids's World (1.15.2)",
    imageUrl: 'img/Kids-World.png',
    description: (
      <>
        Kid's world is an Amusement Park world with a number of rides you can enjoy 
        as well as a glass maze you can get lost in.
      </>
    ),
  },
  {
    title: 'Old World (1.15.2)',
    imageUrl: 'img/Old-World.png',
    description: (
      <>
        "Old World" contains a number of older Minecraft Worlds that we used to play on 
        which were converted from Minecraft Bedrock worlds to Minecraft Java worlds.  Some of these
        are set to adventure mode and are available for exploration only.  A couple of the creative worlds 
        such as "Anna &amp; Alex World" are still being actively played on.
      </>
    ),
  },
  {
    title: 'Forge Creative (1.12.2)',
    imageUrl: 'img/Forge.png',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Forge Survival (1.15.2)',
    imageUrl: 'img/Forge.png',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Click Here For Help
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={'https://durmon.org/downloads/mods.zip'}>
              Download Forge Modpack
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className={styles.center}><img src='static/img/Game-Modes.png'/></div>
              <hr/>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

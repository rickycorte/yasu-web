import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Icon from "@material-ui/core/Icon";

const FeatureList = [
  {
    title: 'Simple and Immediate',
    icon: "favorite_border",
    color: "#BF2326",
    description: (
      <>
        All you need is a public list on <a href="https://myanimelist.com">MyAnimeList</a> or <a href="https://anilist.co">AniList</a>.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    icon: "self_improvement",
    description: (
      <>
        Scroll back to beginning of the page and try!
      </>
    ),
  },
  {
    title: '"Cultured" Animes',
    icon: "block",
    color: "#BF2326",
    description: (
      <>
        Yes, they are exactly what you are thinking!
      </>
    ),
  },
  {
    title: 'Developer Friendly',
    icon: "code",
    description: (
      <>
        Yasu is also a simple <code>REST API</code> open and ready to be used anywhere you want. If you are intrested check our <a href="/docs">documentation</a>.
      </>
    ),
  },
  {
    title: '100% Free',
    icon: "volunteer_activism",
    description: (
      <>
        Everything in Yasu is free for everyone. If you like this project or use the API you may consider a donation to help keep Yasu up and running.
      </>
    ),
  },
];

function Feature({icon, title, description, color="white"}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{paddingTop: "30px"}}>
        <Icon className={styles.featureSvg} style={{color: `${color}`}}>{icon}</Icon>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className={styles.big_title} style={{paddingBottom: "0px"}}>Features</h1>
        <div className="row" style={{display: "flex", justifyContent: "center"}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

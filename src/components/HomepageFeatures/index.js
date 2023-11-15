import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

const FeatureList = [
    {
        title: 'Cadmus',
        svg: 'img/cadmus_logo.svg',
        link: '/docs/cadmus/intro',
        description: (
            <>
                A land claiming mod that allows users to claim land to protect your home from thieves, bandits and monsters, and admins to claim land with region flags and advanced protection
            </>
        ),
    },
    {
        title: 'Prometheus',
        svg: 'img/prometheus_logo.svg',
        link: '/docs/prometheus/intro',
        description: (
            <>
                A utility mod adding useful commands and player permission handling
            </>
        ),
    },
    {
        title: 'Argonauts',
        svg: 'img/argonauts_logo.svg',
        link: '/docs/argonauts/intro',
        description: (
            <>
                A guild and party mod to work and play together with your teammates on a server!
            </>
        ),
    },
];

function Feature({svg, link, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={svg} alt={title} className={styles.featureSvg}/>
            </div>
            <div className="text--center padding-horiz--md">
                <Link to={link}>
                    <h3>{title}</h3>
                </Link>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

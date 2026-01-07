"use client";

import css from './Heroblock.module.css'; 

const HeroBlock = () => { 
    return (
        <section className={css.heroBlock}>
            <div className={css.heroImage}></div>
            <div className={css.heroContentContainer}>
              <div className={css.heroContent}>
                <h1 className={css.heroTitle}>Campers of your dreams</h1>
                <h2 className={css.heroDescription}>You can find everything you want in our catalog</p>
              </div>
              <button className={css.heroButton}>View Now</button>
            </div>
        </section>
    )
}
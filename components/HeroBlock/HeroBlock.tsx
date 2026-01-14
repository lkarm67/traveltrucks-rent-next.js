"use client";

import css from './Heroblock.module.css';
import Link from 'next/link'; 

const HeroBlock = () => { 
    return (
      <section className={css.heroBlock}>
        <div className={css.container}>
          <div className={css.heroContent}>
            <div className={css.heroTitleBox}>
                <h1 className={css.heroTitle}>Campers of your dreams</h1>
                <p className={css.heroDescription}>You can find everything you want in our catalog</p>
            </div>
            <Link
                href="/catalog"
                className={css.button}
            >
              View Now
            </Link>
          </div>
        </div>
      </section>
    )
}

export default HeroBlock;
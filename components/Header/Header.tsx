import css from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <Link href="/" className={css.headerLogoLink} aria-label="Home">
          <Image src="/public/images/travel-trucks-logo.svg" alt="TravelTrucks" width={136} height={16} />
        </Link>
      
        <nav aria-label='Main Navigation'>
          <ul className={css.headerMenu}>
            <li className={css.headerMenuLink}>
              <Link href="/">Home</Link>
            </li>
            <li className={css.headerMenuLink}>
              <Link href="/catalog">Catalog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

"use client"

import css from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <nav className={css.headerNav}>
        <Link href="/" className={clsx(css.headerLogoLink, pathname === "/" && css.active)}>
          <Image src="/images/travel-trucks-logo.svg" alt="TravelTrucks" width={136} height={16} />
        </Link>
      
        <ul className={css.headerMenu}>
          <li className={clsx(css.headerMenuLink, pathname === "/" && css.active)}>
            <Link href="/">Home</Link>
          </li>
          <li className={clsx(css.headerMenuLink, pathname === "/catalog" && css.active)}>
            <Link href="/catalog">Catalog</Link>            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

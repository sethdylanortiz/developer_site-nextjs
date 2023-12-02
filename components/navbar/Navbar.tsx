'use client';
import React from 'react';
import styles from './navbar.module.css';

// nextjs
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// icons
import logo_company from '../../public/punkstarr_logo.png';

/*
to-do:
    - change colors of hover, selected, navbar contianer
*/

const Navbar = () => {

    // next.js hook - that returns the current pathname
    // this connects to browser api - therfore, need to make this a client component
    const get_current_path = usePathname();
    console.log(get_current_path);

    const links = [
        { label: 'Home', href: '/' },
        { label: 'Updates', href: '/updatelog'},
        { label: 'Items', href: '/items' },
    ]

    return (
        <nav className = {styles.container}>
            <Link href = "/">
                <Image
                    src = {logo_company}
                    alt = "logo"
                    height = {60}
                    width = {60}
                />
            </Link>

            <ul className = {styles.ul_container}>
                { links.map(link => 
                    <li>
                        <Link
                            key = {link.href}
                            className = {`${link.href == get_current_path ? styles.item_selected : styles.item }`}
                            href = {link.href}
                        >
                            {link.label}
                        </Link>
                    </li>
                ) }
            </ul>
        </nav>
    )
}

export default Navbar;
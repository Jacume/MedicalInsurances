/**
 * @file Navbar.tsx
 * @author John A Cruz Merced
 * @date 2025-05-26
 * @email cruzmercedjohn@gmail.com
 * @copyright Copyright (c) 2025
 */

import { useEffect, useState, type ReactElement } from 'react';
import type { NavbarOption } from './navbar.d.ts';
import './navbar.css';


export default function Navbar(settings: { options: NavbarOption[]; main: NavbarOption }): ReactElement {
    const [open, toggleOpen] = useState(false);
    // Close on Esc
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') toggleOpen(false);
        };
        globalThis.addEventListener('keydown', onKey);
        return () => globalThis.removeEventListener('keydown', onKey);
    }, []);

    // Lock body scroll when drawer is open
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = open ? 'hidden' : prev || '';
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);
    const close = () => toggleOpen(false);

    return (
        <>
            <header className='navbar-view'>
                <a className='navbar-main' href={settings.main.href ?? '/'}>
                    {settings.main.label}
                </a>

                {/* Desktop nav */}
                <nav className='navbar-desktop' aria-label='Primary'>
                    {settings.options.map(({ href, label }) => (
                        <a key={href} href={href}>
                            {label}
                        </a>
                    ))}
                </nav>
                {/* Burger (mobile) */}
                <button
                    className='navbar-burger'
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    aria-controls='mobile-menu'
                    onClick={() => toggleOpen((o) => !o)}
					type='button'
                >
                    <span className='navbar-burger-bar' />
                    <span className='navbar-burger-bar' />
                    <span className='navbar-burger-bar' />
                </button>
            </header>
            {/* Overlay + Drawer (mobile) */}
            <div className={`navbar-overlay ${open ? 'navbar-overlay_open' : ''}`} onClick={close} />
            <aside id='mobile-menu' className={`navbar-drawer ${open ? 'navbar-drawer_open' : ''}`} aria-label='Mobile navigation'>
                <nav className='navbar-menu'>
                    {settings.options.map(({ href, label }) => (
                        <a key={href} href={href} onClick={close}>
                            {label}
                        </a>
                    ))}
                </nav>
            </aside>
        </>
    );
}
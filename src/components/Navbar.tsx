import { Link } from 'react-router-dom';
import { NavItem } from './NavItem';
import { motion } from 'framer-motion';
import { NavItemType } from '@/@types/types';

const navItems: NavItemType[] = [
    {
        to: '/',
        icon: 'fa-home',
        title: 'home',
    },
    {
        to: '/about',
        icon: 'fa-user',
        title: 'about',
    },
    {
        to: '/contact',
        icon: 'fa-comments',
        title: 'contact',
    },
    {
        to: '/services',
        icon: 'fa-list',
        title: 'services',
    },
    {
        to: '/portfolio',
        icon: 'fa-briefcase',
        title: 'portfolio',
    },
];


export default function Navbar({ isOpen }: { isOpen: boolean }) {
    return (
        <motion.div
            transition={{ duration: 1, bounce: false, type: 'spring', damping: 15, stiffness: 70 }}
            className={`aside z-50 ${
                isOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'
            }  w-64 flex fixed left-0 flex-col px-10 pt-12 h-full`}
        >
            <div className="text-lg text-center mb-20 logo">
                <Link to="/">
                    <span>Portfoli</span>o
                </Link>
            </div>
            {/* <Switcher /> */}
            <nav className="nav">
                <ul>
                    {navItems.map((item) => (
                        <NavItem key={item.to} {...item} />
                    ))}
                </ul>
            </nav>
        </motion.div>
    );
}

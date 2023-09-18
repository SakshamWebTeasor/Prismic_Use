import React from 'react'
import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import Bounded from '@/components/Bounded';
import Icon from '@/components/newLogo';

async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");
    return (
        <Bounded as="header" className='py=4 md:py-6 lg:py-8'>
            <div className='flex gap-4 items-center justify-between sm:flex-row flex-col'>
                <Link href='/'>
                    <Icon />
                </Link>
                <nav>
                    <ul className='flex'>
                        {settings.data.navigation.map(({ label, link }) => (
                            <li key={label}>
                                <PrismicNextLink field={link} className='p-4'>{label}</PrismicNextLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </Bounded>
    )
}

export default Header
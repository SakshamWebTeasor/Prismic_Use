import React from 'react'
import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import Icon from '@/components/newLogo';
import Bounded from '@/components/Bounded';

async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");
    return (
        <Bounded>
            <div className='flex sm:flex-row flex-col justify-between items-center gap-6'>
            <Link href='/'>
                <Icon />
            </Link>
            <p className='text-sm'>©{new Date().getFullYear()} {settings.data.site_title}</p>
            <ul className='flex'>
                {settings.data.navigation.map(({ label, link }) => (
                    <li key={label}>
                        <PrismicNextLink field={link} className='p-4'>{label}</PrismicNextLink>
                    </li>
                ))}
            </ul>
            </div>
        </Bounded>
    )
}

export default Footer
'use client'

import classes from '@/app/pagesErrNotFound.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
    const slugPath = usePathname();
    const mealName = slugPath.split('/').pop();
    return (
        <>
            <main className={classes.notFound}>
                <h1>No <strong>"{mealName}"</strong> meal</h1>
                <p>Sorry, we don't have that meal yet.</p>
                <div className={classes.cta}>
                    <Link href="/">Go back to the main page</Link>
                </div>
            </main>
        </>
    )
}
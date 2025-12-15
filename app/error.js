'use client'

import classes from '@/app/pagesErrNotFound.module.css';
import Link from 'next/link';

export default function Error({error}) {
    return (
        <>
            <main className={classes.error}>
                <h1>Opsie - error occured:</h1>
                <p>😔</p>
                <p>{error.message}</p>
                <div className={classes.cta}>
                    <Link href="/">Go back to the main page</Link>
                </div>
            </main>
        </>
    )
}
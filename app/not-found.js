import classes from '@/app/pagesErrNotFound.module.css';
import Link from 'next/link';

export default function NotFound() {
    return (
        <>
            <main className={classes.notFound}>
                <h1>404</h1>
                <p>We don't have that page, sorry</p>
                <div className={classes.cta}>
                    <Link href="/">Go back to the main page</Link>
                </div>
            </main>
        </>
    )
}
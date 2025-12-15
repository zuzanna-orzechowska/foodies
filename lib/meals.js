import db from '@/lib/db';

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve,2000));
    // throw new Error('Loading meals failed');
    const result = await db.execute("SELECT * FROM meals");
    return result.rows;
}

export async function getMeal(slug) {
    const result = await db.execute({
        sql: "SELECT * FROM meals WHERE slug = ?",
        args: [slug],
    });
    return result.rows[0];
}
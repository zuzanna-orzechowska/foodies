import db from '@/lib/db';
import slugify from 'slugify';
import xss from 'xss';
import { put } from "@vercel/blob";

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

export async function addToTurso(meal) {
    const slug = slugify(meal.title, {lower: true});
    const instructions = xss(meal.instructions);
    const blob = await put(meal.image.name, meal.image, {access: 'public'});

    await db.execute({
      sql: `INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
      args: [
        slug,
        meal.title,
        blob.url,
        meal.summary,
        instructions,
        meal.creator,
        meal.creator_email
      ],
    });
}